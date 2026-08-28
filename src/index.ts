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
  /**
   * Agrupa en pantalla pero no participa de la rama de permiso. Es el caso de
   * las áreas de la empresa en el portal de Despapeliza: "Finanzas" ordena la
   * vista, pero el permiso de lo que cuelga sigue siendo `facturacion`, no
   * `finanzas.facturacion`. Un grupo nunca tiene url.
   */
  grupo?: boolean;
  titulo: string;
  /** Bajada corta; en el portal se muestra en el primer nivel y como tooltip más abajo. */
  descripcion?: string;
  /** URL absoluta de la pantalla. Sin url, el nodo solo agrupa o está por construirse. */
  url?: string;
  tipo?: Tipo;
  estado?: Estado;
  /** Nombre del icono de lucide-react. El paquete no importa iconos: los resuelve quien pinta. */
  icono?: string;
  /** La app tiene /auth/sso propio y hay que entrar con SSOLink, no con un enlace normal. */
  sso?: boolean;
  /**
   * Existe como rama de permiso pero no se pinta en el portal: es el caso de
   * `pemrc` y `peespi` en Mardones, que ya se ven dentro de su división y no
   * tienen por qué aparecer dos veces.
   */
  oculto?: boolean;
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
    // Los grupos ordenan la vista pero no suman segmento a la rama.
    const rama = camino
      .filter((n) => !n.grupo)
      .map((n) => n.slug)
      .join(".");
    return [
      { nodo, rama, ancestros },
      ...(nodo.hijos ? recorrer(nodo.hijos, camino) : []),
    ];
  });
}

/** Solo las hojas navegables: lo que un buscador debe poder ofrecer. */
export function hojas(nodos: Nodo[]) {
  return recorrer(nodos)
    .filter(({ nodo }) => nodo.url && !nodo.oculto)
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
  const vivos: Nodo[] = [];
  for (const nodo of nodos) {
    // Un grupo no tiene permiso propio: pasa si le queda algún hijo visible.
    if (nodo.grupo) {
      const hijos = podar(nodo.hijos ?? [], permite, prefijo);
      if (hijos.length) vivos.push({ ...nodo, hijos });
      continue;
    }
    const rama = prefijo ? `${prefijo}.${nodo.slug}` : nodo.slug;
    if (!permite(rama)) continue;
    const podado: Nodo = { ...nodo };
    if (nodo.hijos) podado.hijos = podar(nodo.hijos, permite, rama);
    vivos.push(podado);
  }
  return vivos;
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
  // Los grupos no son permisos: se saltan y suben sus hijos al nivel del padre,
  // para que el selector muestre exactamente las ramas que existen.
  const aplanar = (ns: Nodo[]): Nodo[] =>
    ns.flatMap((n) => (n.grupo ? aplanar(n.hijos ?? []) : [n]));
  return aplanar(nodos).map(mapear);
}

export { CENADE } from "./cenade";
export { INDRA } from "./indra";
export { HIDROGISTICA } from "./hidrogistica";
export { CHAMONATE } from "./chamonate";
export { OMAMET } from "./omamet";
export { DESPAPELIZA } from "./despapeliza";
export { CIL } from "./cil";
export { MARDONES } from "./mardones";
export { DEMO } from "./demo";
export { ANAM } from "./anam";
