import type { Catalogo } from "./index";

/** Mardones — cliente 7. Dos divisiones, cada una con su plan estratégico. */
export const MARDONES: Catalogo = {
  cliente: "mardones",
  nombre: "Mardones",
  nodos: [
    {
      slug: "rentacomercial",
      titulo: "Renta Comercial",
      descripcion:
        "Herramientas internas de la división de Renta Comercial de Mardones.",
      tipo: "app",
      icono: "Store",
      hijos: [
        {
          slug: "arriendos",
          titulo: "Arriendos",
          descripcion:
            "Ocupación, contratos, facturación, recaudación y morosidad de las 343 unidades, leídos de la plataforma bheed.",
          url: "https://arriendos.mardones.portalcenade.cl",
          tipo: "app",
          icono: "Building2",
        },
        // El PE de cada división tiene slug propio de primer nivel (pemrc /
        // peespi), así que va como nodo suelto además de colgar acá.
        {
          slug: "pe",
          titulo: "Plan Estratégico 2026",
          url: "https://pemrc.mardones.portalcenade.cl",
          tipo: "tablero",
          icono: "Target",
        },
      ],
    },
    {
      slug: "espacioinmobiliario",
      titulo: "Espacio Inmobiliario",
      descripcion:
        "Herramientas internas de la división de Espacio Inmobiliario de Mardones.",
      tipo: "app",
      icono: "Building2",
      hijos: [
        {
          slug: "pe",
          titulo: "Plan Estratégico 2026",
          url: "https://peespi.mardones.portalcenade.cl",
          tipo: "tablero",
          icono: "Target",
        },
      ],
    },
    {
      slug: "planrrhh",
      titulo: "Plan de Acción RRHH",
      descripcion:
        "Plan de RRHH y Cultura Organizacional: 6 etapas con % de avance, comentarios y responsables, editable en vivo.",
      url: "https://planrrhh.mardones.portalcenade.cl",
      tipo: "app",
      icono: "Users",
    },
    {
      slug: "clima",
      titulo: "Encuesta de Clima Laboral",
      descripcion:
        "Encuesta anónima de clima laboral: comparte el link con el equipo para responder, y revisa los resultados agregados desde el panel admin.",
      url: "https://clima.mardones.portalcenade.cl",
      tipo: "app",
      icono: "HeartHandshake",
    },
    // Los planes también existen como rama propia: hay cuentas con permiso
    // 'pemrc'/'peespi' y no sobre la división completa.
    {
      slug: "pemrc",
      titulo: "PE Renta Comercial",
      url: "https://pemrc.mardones.portalcenade.cl",
      tipo: "tablero",
      icono: "Target",
      oculto: true,
    },
    {
      slug: "peespi",
      titulo: "PE Espacio Inmobiliario",
      url: "https://peespi.mardones.portalcenade.cl",
      tipo: "tablero",
      icono: "Target",
      oculto: true,
    },
  ],
};
