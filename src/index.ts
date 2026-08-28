/**
 * Catálogo único de apps por cliente.
 *
 * El árbol de cada cliente vivía escrito tres veces: en el portal de inicio,
 * en el selector de permisos del hub maestro y en el proxy de cada app. Tres
 * copias que había que mantener a mano y que se desincronizaban solas. Acá
 * está una sola vez, y de acá salen las tres.
 *
 * La rama de permiso de un nodo es la unión de los slugs de sus ancestros con
 * el suyo: `operaciones.planificacion.lagmet`. Es exactamente lo que compara
 * `puedeVer` y lo que comprueba el proxy del portal de destino.
 */

/** Qué es la pieza, no dónde vive. Va como etiqueta, nunca como carpeta. */
export type Tipo = "tablero" | "app" | "registro" | "carga" | "sitio";

export type Estado = "activo" | "levantamiento" | "pronto";

export type Nodo = {
  /** Un solo segmento de la rama de permiso: 'planificacion', no 'operaciones.planificacion'. */
  slug: string;
  titulo: string;
  /** Bajada corta; en el portal se muestra en el primer nivel y como tooltip más abajo. */
  descripcion?: string;
  /** URL absoluta de la pantalla. Sin url, el nodo solo agrupa o está por construirse. */
  url?: string;
  tipo?: Tipo;
  estado?: Estado;
  /** Nombre del icono de lucide-react. El paquete no importa iconos: los resuelve quien pinta. */
  icono?: string;
  hijos?: Nodo[];
};

export type Catalogo = {
  cliente: string;
  nombre: string;
  nodos: Nodo[];
};

/** Profundidad máxima del árbol: área → módulo → vista. Lo que venga más abajo
 *  es una pestaña dentro de la vista, no una rama nueva del portal. */
export const NIVELES_MAX = 3;

/** Recorre el árbol y devuelve cada nodo con su rama de permiso y sus ancestros. */
export function recorrer(
  nodos: Nodo[],
  ancestros: Nodo[] = [],
): { nodo: Nodo; rama: string; ancestros: Nodo[] }[] {
  return nodos.flatMap((nodo) => {
    const camino = [...ancestros, nodo];
    const rama = camino.map((n) => n.slug).join(".");
    return [
      { nodo, rama, ancestros },
      ...(nodo.hijos ? recorrer(nodo.hijos, camino) : []),
    ];
  });
}

/** Solo las hojas navegables: lo que un buscador debe poder ofrecer. */
export function hojas(nodos: Nodo[]) {
  return recorrer(nodos)
    .filter(({ nodo }) => nodo.url)
    .map(({ nodo, rama, ancestros }) => ({
      rama,
      titulo: nodo.titulo,
      url: nodo.url as string,
      tipo: nodo.tipo,
      icono: nodo.icono,
      /** 'Operaciones › Planificación' — para ubicar el resultado en el árbol. */
      contexto: ancestros.map((a) => a.titulo).join(" › "),
    }));
}

/** Poda el árbol dejando solo lo que la cuenta puede ver.
 *  `permite` recibe la rama completa y responde si pasa: se le pasa `puedeVer`
 *  de @cenade/portal-auth, para no duplicar acá la lógica de permisos. */
export function podar(
  nodos: Nodo[],
  permite: (rama: string) => boolean,
  prefijo = "",
): Nodo[] {
  return nodos
    .map((nodo) => {
      const rama = prefijo ? `${prefijo}.${nodo.slug}` : nodo.slug;
      if (!permite(rama)) return null;
      const hijos = nodo.hijos ? podar(nodo.hijos, permite, rama) : undefined;
      return { ...nodo, hijos };
    })
    .filter((n): n is Nodo => n !== null);
}

/** El árbol que consume el selector de permisos del hub maestro. */
export function arbolDePermisos(nodos: Nodo[]): {
  slug: string;
  nombre: string;
  hijos?: { slug: string; nombre: string; hijos?: { slug: string; nombre: string }[] }[];
}[] {
  const mapear = (n: Nodo): any => ({
    slug: n.slug,
    nombre: n.titulo,
    ...(n.hijos?.length ? { hijos: n.hijos.map(mapear) } : {}),
  });
  return nodos.map(mapear);
}

export { OMAMET } from "./omamet";
