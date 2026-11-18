import type { Catalogo } from "./index";

const PPTO = "https://ppto.chamonate.portalcenade.cl";

/** Chamonate — cliente 3. */
export const CHAMONATE: Catalogo = {
  cliente: "chamonate",
  nombre: "Chamonate",
  nodos: [
    {
      slug: "kpi",
      titulo: "KPI",
      descripcion:
        "Dashboards de rentabilidad: General consolidado, Campo, Administración, Packing y Maquinaria.",
      tipo: "tablero",
      icono: "Sprout",
      hijos: [
        { slug: "general", titulo: "General", descripcion: "Consolidado de las tres líneas: ingresos, costos, resultado y margen por año y mes, con filtro por línea de negocio.", url: "https://kpi-general.chamonate.portalcenade.cl", tipo: "tablero", icono: "BarChart3" },
        { slug: "campo", titulo: "Campo", descripcion: "Rentabilidad agrícola por temporada: ingresos vs costos, EERR por cuenta, drill sucursal → cultivo → cuartel.", url: "https://kpi-campo.chamonate.portalcenade.cl", tipo: "tablero", icono: "Sprout" },
        { slug: "administracion", titulo: "Administración", descripcion: "Cuarta línea de negocio, con su propio Estado de Resultado (EERR) por cuenta.", url: "https://kpi-administracion.chamonate.portalcenade.cl", tipo: "tablero", icono: "Building2" },
        { slug: "maquinaria", titulo: "Maquinaria", descripcion: "Rentabilidad de la flota: ingresos reales por OT vs costos, EERR por labor y máquina.", url: "https://kpi-maquinaria.chamonate.portalcenade.cl", tipo: "tablero", icono: "Wrench" },
        { slug: "packing", titulo: "Packing", descripcion: "Rentabilidad de packing por línea: ingresos vs costos, EERR por cuenta, drill línea → centro de costo.", url: "https://kpi-packing.chamonate.portalcenade.cl", tipo: "tablero", icono: "Package" },
      ],
    },
    {
      slug: "ppto",
      titulo: "Presupuesto",
      descripcion:
        "Presupuesto por línea de negocio contra el resultado real. Hoy Maquinaria; Campo, Packing y consolidado en camino.",
      tipo: "tablero",
      icono: "Calculator",
      hijos: [
        { slug: "maquinaria", titulo: "Maquinaria", descripcion: "Presupuesto de Maquinaria contra el resultado real.", url: `${PPTO}/maquinaria`, tipo: "tablero", icono: "Wrench" },
        { slug: "campo", titulo: "Campo", descripcion: "Presupuesto de Campo contra el resultado real. Por construir.", tipo: "tablero", estado: "pronto", icono: "Sprout" },
        { slug: "packing", titulo: "Packing", descripcion: "Presupuesto de Packing contra el resultado real. Por construir.", tipo: "tablero", estado: "pronto", icono: "Package" },
        { slug: "consolidado", titulo: "Consolidado", descripcion: "Presupuesto consolidado de las líneas de negocio contra el resultado real. Por construir.", tipo: "tablero", estado: "pronto", icono: "BarChart3" },
      ],
    },
    {
      slug: "pe2026",
      titulo: "Plan Estratégico",
      descripcion: "Seguimiento de los 4 pilares y 11 acciones del Plan Estratégico.",
      url: "https://pe2026.chamonate.portalcenade.cl",
      tipo: "tablero",
      icono: "Target",
    },
    {
      slug: "jornadas",
      titulo: "Trabajador Propio",
      descripcion:
        "Jornadas, horas extra y costo de mano de obra propia del Fundo Pichiguao.",
      url: "https://jornadas.chamonate.portalcenade.cl",
      tipo: "app",
      icono: "Users",
    },
  ],
};
