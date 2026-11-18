import type { ComponentType, CSSProperties, ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import { hojas as hojasDe, type Nodo } from "../index";
import { Buscador } from "./Buscador";
import { icono } from "./iconos";

/**
 * El portal de inicio de un cliente, completo. Antes cada portal traía su
 * copia de Rama, Buscador, iconos y 200 líneas de CSS, y cada copia se fue
 * desviando sola. Ahora el portal solo dice quién es (nombre, logo, acento) y
 * qué puede ver la cuenta (los nodos ya podados); el dibujo vive acá.
 *
 * Disposición: una barra angosta (logo y sesión) y debajo una sola tabla, con
 * las mismas columnas en todas las filas —pantalla, descripción, tipo—. El
 * primer nivel son filas altas: una pantalla suelta navega, un área despliega
 * las suyas. Todo alineado a la misma grilla: se lee como el menú de un sistema
 * de gestión, no como un tablero de tarjetas.
 */

type EnlaceSsoProps = {
  href: string;
  className?: string;
  target?: string;
  children: ReactNode;
};

/**
 * Las apps se abren en la MISMA pestaña. Abrían en pestaña nueva, y como el
 * botón «Volver al portal» de cada app navega en su propia pestaña, cada ida y
 * vuelta dejaba un portal duplicado y una pestaña donde Atrás no hacía nada.
 * Solo los sitios web públicos salen aparte: no tienen cómo volver al portal.
 */
function aparte(nodo: Nodo) {
  return nodo.tipo === "sitio";
}

export type PortalProps = {
  /** Nombre del cliente tal como va en la barra: "Indra Repuestos". */
  nombre: string;
  /** Línea chica bajo el nombre. */
  etiqueta?: string;
  /** Color de acento del cliente, en hex. Todo el tinte del portal sale de acá. */
  acento: string;
  /** Logo real del cliente; se pinta dentro de una pastilla blanca. */
  logo?: ReactNode;
  /** El árbol ya podado para la cuenta. */
  nodos: Nodo[];
  /** Enlace de regreso al portal de arriba (sub-portales, o Cenade mirando a un cliente). */
  volver?: { href: string; texto: string };
  /** Nombre o correo de quien entró. */
  usuario?: string | null;
  /** Botones de sesión (salir, mi cuenta). Usar la clase `pc-btn`. */
  acciones?: ReactNode;
  /** Para apps con /auth/sso propio (KPI Gerencias de Indra). */
  EnlaceSso?: ComponentType<EnlaceSsoProps>;
  /** Texto del pie. Por defecto: © año Cliente · Portal interno · Desarrollado por Cenade. */
  pie?: ReactNode;
  /** Contenido extra bajo el árbol. */
  children?: ReactNode;
};

/** Se pinta como enlace y no como panel: no tiene hijos, o es un ERP con menú propio. */
function esHoja(n: Nodo) {
  return !n.hijos?.length || Boolean(n.directo && n.url);
}

function visibles(nodos: Nodo[] = []) {
  return nodos.filter((n) => !n.oculto);
}

function contarPantallas(n: Nodo): number {
  if (esHoja(n)) return 1;
  return (n.url ? 1 : 0) + visibles(n.hijos).reduce((s, h) => s + contarPantallas(h), 0);
}

const TIPO: Record<string, string> = {
  tablero: "Tablero",
  app: "Aplicación",
  registro: "Registro",
  carga: "Carga de datos",
  sitio: "Sitio web",
};

function Enlace({
  nodo,
  className,
  style,
  EnlaceSso,
  children,
}: {
  nodo: Nodo;
  className: string;
  style?: CSSProperties;
  EnlaceSso?: ComponentType<EnlaceSsoProps>;
  children: ReactNode;
}) {
  if (nodo.estado === "pronto" || !nodo.url) {
    return (
      <div className={`${className} pc-pendiente`} style={style}>
        {children}
      </div>
    );
  }
  if (nodo.sso && EnlaceSso) {
    // El envoltorio lleva la sangría: EnlaceSso solo acepta href y className.
    return (
      <EnlaceSso href={nodo.url} className={className} target="_self">
        {children}
      </EnlaceSso>
    );
  }
  return (
    <a
      href={nodo.url}
      {...(aparte(nodo) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}

/** Las celdas de una fila: pantalla · descripción · tipo · abrir. Siempre las mismas columnas. */
function Celdas({
  nodo,
  titulo,
  cuenta,
}: {
  nodo: Nodo;
  titulo?: string;
  /** Si viene, la fila despliega en vez de navegar: muestra cuántas pantallas trae. */
  cuenta?: number;
}) {
  const Icon = icono(nodo.icono);
  const pendiente = nodo.estado === "pronto" || !nodo.url;
  const despliega = cuenta !== undefined;
  return (
    <>
      <span className="pc-c-nombre">
        <span className="pc-ico-caja">
          <Icon className="pc-ico" />
        </span>
        <span className="pc-titulo">{titulo ?? nodo.titulo}</span>
      </span>
      <span className="pc-c-desc">{nodo.descripcion}</span>
      <span className="pc-c-tipo">
        {despliega ? (
          <span className="pc-cuenta">
            {cuenta} {cuenta === 1 ? "pantalla" : "pantallas"}
          </span>
        ) : nodo.estado === "levantamiento" ? (
          <span className="pc-chip">Levantamiento</span>
        ) : pendiente ? (
          <span className="pc-chip">Pronto</span>
        ) : (
          nodo.tipo && <span className="pc-tipo">{TIPO[nodo.tipo]}</span>
        )}
      </span>
      <span className="pc-c-fin">
        {despliega ? (
          <ChevronDown className="pc-ico-s pc-chevron" />
        ) : (
          !pendiente && <ArrowUpRight className="pc-ico-s pc-flecha" />
        )}
      </span>
    </>
  );
}

// Cada entrada de primer nivel lleva su propio color de icono, y sus pantallas
// lo heredan: así un área se distingue de la otra de un vistazo.
const TONOS = [
  "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6",
  "#f43f5e", "#06b6d4", "#f97316", "#14b8a6",
];

const estilo = (nivel: number, tono?: string) =>
  ({ "--pc-nivel": nivel, ...(tono ? { "--pc-tono": tono } : {}) }) as CSSProperties;

/** Una pantalla: una fila de la tabla. */
function Fila({
  nodo,
  nivel,
  tono,
  EnlaceSso,
}: {
  nodo: Nodo;
  nivel: number;
  tono?: string;
  EnlaceSso?: PortalProps["EnlaceSso"];
}) {
  return (
    <Enlace
      nodo={nodo}
      className={nivel === 0 ? "pc-fila pc-fila-1" : "pc-fila"}
      style={estilo(nivel, tono)}
      EnlaceSso={EnlaceSso}
    >
      <Celdas nodo={nodo} />
    </Enlace>
  );
}

/** Los hijos de un nodo, incluida su pantalla propia: sin esa fila sería inalcanzable. */
function Hijos({
  nodo,
  nivel,
  EnlaceSso,
}: {
  nodo: Nodo;
  nivel: number;
  EnlaceSso?: PortalProps["EnlaceSso"];
}) {
  return (
    <>
      {nodo.url && (
        <Enlace nodo={nodo} className="pc-fila" style={estilo(nivel)} EnlaceSso={EnlaceSso}>
          <Celdas nodo={nodo} titulo={nodo.principal ?? nodo.titulo} />
        </Enlace>
      )}
      {visibles(nodo.hijos).map((hijo) =>
        esHoja(hijo) ? (
          <Fila key={hijo.slug} nodo={hijo} nivel={nivel} EnlaceSso={EnlaceSso} />
        ) : (
          <Area key={hijo.slug} nodo={hijo} nivel={nivel} EnlaceSso={EnlaceSso} />
        ),
      )}
    </>
  );
}

/**
 * Un área o módulo: su fila no navega, despliega. Parte cerrada, así el portal
 * abre mostrando solo el primer nivel y cada área se recorre al apretarla
 * (Indicadores → Finanzas, Operaciones…).
 */
function Area({
  nodo,
  nivel,
  tono,
  EnlaceSso,
}: {
  nodo: Nodo;
  nivel: number;
  tono?: string;
  EnlaceSso?: PortalProps["EnlaceSso"];
}) {
  return (
    <details className="pc-area" style={tono ? ({ "--pc-tono": tono } as CSSProperties) : undefined}>
      <summary
        className={nivel === 0 ? "pc-fila pc-fila-1 pc-fila-area" : "pc-fila pc-fila-area"}
        style={estilo(nivel)}
      >
        <Celdas nodo={nodo} cuenta={contarPantallas(nodo)} />
      </summary>
      <div className="pc-area-in">
        <Hijos nodo={nodo} nivel={nivel + 1} EnlaceSso={EnlaceSso} />
      </div>
    </details>
  );
}

/** La barra superior, sola: la usa también el hub maestro de Cenade. */
export function Barra({
  nombre,
  etiqueta = "Portal interno",
  logo,
  volver,
  usuario,
  acciones,
}: {
  nombre: string;
  etiqueta?: string;
  logo?: ReactNode;
  volver?: { href: string; texto: string };
  usuario?: string | null;
  acciones?: ReactNode;
}) {
  return (
    <header className="pc-barra">
      <div className="pc-barra-in">
        {volver && (
          <a href={volver.href} className="pc-btn pc-volver" aria-label={volver.texto}>
            <ArrowLeft />
            <span>{volver.texto}</span>
          </a>
        )}
        <div className="pc-marca">
          {logo && <span className="pc-logo">{logo}</span>}
          <span className="pc-texto">
            <span className="pc-titulo">{nombre}</span>
            <span className="pc-bajada">{etiqueta}</span>
          </span>
        </div>
        <div className="pc-acciones">
          {usuario && <span className="pc-usuario">{usuario}</span>}
          {acciones}
        </div>
      </div>
    </header>
  );
}

export function Portal({
  nombre,
  etiqueta = "Portal interno",
  acento,
  logo,
  nodos,
  usuario,
  volver,
  acciones,
  EnlaceSso,
  pie,
  children,
}: PortalProps) {
  const arbol = visibles(nodos);
  const hojas = hojasDe(arbol);
  const pantallas = arbol.reduce((s, n) => s + contarPantallas(n), 0);
  const areas = arbol.filter((n) => !esHoja(n));

  return (
    <div className="pc" style={{ "--pc-acento": acento } as CSSProperties}>
      <Barra
        nombre={nombre}
        etiqueta={etiqueta}
        logo={logo}
        volver={volver}
        usuario={usuario}
        acciones={acciones}
      />

      <main className="pc-cuerpo">
        <div className="pc-encabezado">
          <div className="pc-hero">
            <h1>
              Herramientas <span>{nombre}</span>
            </h1>
            <p>
              {pantallas} {pantallas === 1 ? "pantalla" : "pantallas"}
              {areas.length > 0 && ` · ${areas.length} ${areas.length === 1 ? "área" : "áreas"}`}
            </p>
          </div>
          {hojas.length > 5 && <Buscador hojas={hojas} />}
        </div>

        {arbol.length === 0 ? (
          <p className="pc-sin-acceso">
            Tu cuenta todavía no tiene pantallas asignadas en este portal.
            Pídele el acceso a tu consultor Cenade.
          </p>
        ) : (
          <div className="pc-tabla">
            <div className="pc-fila pc-columnas" aria-hidden>
              <span className="pc-c-nombre">Pantalla</span>
              <span className="pc-c-desc">Descripción</span>
              <span className="pc-c-tipo">Tipo</span>
              <span className="pc-c-fin" />
            </div>

            {/* Primer nivel en el orden del catálogo: pantallas sueltas y áreas. */}
            {arbol.map((n, i) => {
              const tono = TONOS[i % TONOS.length];
              return esHoja(n) ? (
                <Fila key={n.slug} nodo={n} nivel={0} tono={tono} EnlaceSso={EnlaceSso} />
              ) : (
                <Area key={n.slug} nodo={n} nivel={0} tono={tono} EnlaceSso={EnlaceSso} />
              );
            })}
          </div>
        )}

        {children}
      </main>

      <footer className="pc-pie">
        {pie ?? (
          <>
            © {new Date().getFullYear()} {nombre} · Portal interno · Desarrollado por Cenade
          </>
        )}
      </footer>
    </div>
  );
}
