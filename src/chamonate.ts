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
        "Dashboards de rentabilidad: General consolidado, Campo, Packing y Maquinaria.",
      tipo: "tablero",
      icono: "Sprout",
      hijos: [
        { slug: "general", titulo: "General", url: "https://kpi-general.chamonate.portalcenade.cl", tipo: "tablero", icono: "BarChart3" },
        { slug: "campo", titulo: "Campo", url: "https://kpi-campo.chamonate.portalcenade.cl", tipo: "tablero", icono: "Sprout" },
        { slug: "maquinaria", titulo: "Maquinaria", url: "https://kpi-maquinaria.chamonate.portalcenade.cl", tipo: "tablero", icono: "Wrench" },
        { slug: "packing", titulo: "Packing", url: "https://kpi-packing.chamonate.portalcenade.cl", tipo: "tablero", icono: "Package" },
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
        { slug: "maquinaria", titulo: "Maquinaria", url: `${PPTO}/maquinaria`, tipo: "tablero", icono: "Wrench" },
        { slug: "campo", titulo: "Campo", tipo: "tablero", estado: "pronto", icono: "Sprout" },
        { slug: "packing", titulo: "Packing", tipo: "tablero", estado: "pronto", icono: "Package" },
        { slug: "consolidado", titulo: "Consolidado", tipo: "tablero", estado: "pronto", icono: "BarChart3" },
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
