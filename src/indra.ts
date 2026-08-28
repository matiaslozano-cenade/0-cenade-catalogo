import type { Catalogo } from "./index";

const IND = "https://indicadores-";
const TI = "https://indicadores-ti.indra.portalcenade.cl";

/** Indra Repuestos — cliente 1. */
export const INDRA: Catalogo = {
  cliente: "indra",
  nombre: "Indra Repuestos",
  nodos: [
    {
      slug: "kpigerencia",
      titulo: "KPI Gerencias",
      descripcion:
        "Indicadores mensuales por gerencia con semáforos. Cada área ingresa sus KPIs y los visualiza con tendencias y desviación vs. meta.",
      url: "https://kpigerencia.indra.portalcenade.cl",
      tipo: "tablero",
      icono: "BarChart3",
      // Única app con SSO propio (/auth/sso): el portal la abre con SSOLink.
      sso: true,
    },
    {
      slug: "indicadores",
      titulo: "Desarrollo de Indicadores",
      descripcion:
        "Indicadores evolutivos por área: Finanzas, Comercial, Abastecimiento, Logística y TI. Cada área con su propio panel de datos.",
      url: "https://indicadores.indra.portalcenade.cl",
      tipo: "tablero",
      icono: "TrendingUp",
      hijos: [
        { slug: "finanzas", titulo: "Finanzas", url: `${IND}finanzas.indra.portalcenade.cl`, tipo: "tablero", icono: "TrendingUp" },
        { slug: "comercial", titulo: "Comercial", url: `${IND}comercial.indra.portalcenade.cl`, tipo: "tablero", icono: "ShoppingCart" },
        { slug: "abastecimiento", titulo: "Abastecimiento", url: `${IND}abastecimiento.indra.portalcenade.cl`, tipo: "tablero", icono: "Package" },
        { slug: "logistica", titulo: "Logística", url: `${IND}logistica.indra.portalcenade.cl`, tipo: "tablero", icono: "Truck" },
        {
          slug: "ti",
          titulo: "TI",
          url: TI,
          tipo: "tablero",
          icono: "Monitor",
          hijos: [
            { slug: "proyectos", titulo: "Proyectos", url: `${TI}/proyectos`, tipo: "tablero", icono: "FolderKanban" },
            { slug: "tickets", titulo: "Tickets", url: `${TI}/tickets`, tipo: "tablero", icono: "Ticket" },
            { slug: "tiempos-operativos", titulo: "Tiempos Operativos", url: `${TI}/tiempos-operativos`, tipo: "tablero", icono: "Timer" },
            { slug: "disponibilidad", titulo: "Disponibilidad", url: `${TI}/disponibilidad`, tipo: "tablero", icono: "Activity" },
          ],
        },
      ],
    },
    {
      slug: "pe2026",
      titulo: "Plan Estratégico 2026",
      descripcion:
        "Seguimiento de las 44 acciones del PE 2026. Asigna responsables, registra avance, fechas y bitácora por acción. Días restantes calculados en vivo.",
      url: "https://pe2026.indra.portalcenade.cl",
      tipo: "tablero",
      icono: "Target",
    },
    {
      slug: "acuerdos",
      titulo: "Acuerdos Directorio",
      descripcion:
        "Registro y seguimiento de los acuerdos de cada sesión de directorio: responsables, fechas de compromiso, estado y bitácora de avances.",
      url: "https://acuerdos.indra.portalcenade.cl",
      tipo: "app",
      icono: "Gavel",
    },
    {
      slug: "reposicion",
      titulo: "Modelo de Reposición",
      descripcion:
        "Carga los extractos de SAP y obtén la compra sugerida por proveedor, alertas de sobrestock y redistribución entre locales. Tablero, filtros y Excel descargable. Se procesa en tu navegador.",
      url: "https://reposicion.indra.portalcenade.cl",
      tipo: "app",
      icono: "PackageSearch",
    },
    {
      slug: "organigrama",
      titulo: "Organigrama",
      descripcion:
        "Construye y reordena la estructura sobre la nómina real: arrastra unidades para cambiar la línea de reporte, agrupa varias bajo una jefatura nueva, agrega o elimina, y exporta la lámina a PNG o PPTX.",
      url: "https://organigrama.indra.portalcenade.cl",
      tipo: "app",
      icono: "Network",
    },
  ],
};
