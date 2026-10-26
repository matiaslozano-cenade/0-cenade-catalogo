import type { Catalogo } from "./index";

const PE = "https://pe.ecoriles.portalcenade.cl";

/** Ecoriles — cliente 10. */
export const ECORILES: Catalogo = {
  cliente: "ecoriles",
  nombre: "Ecoriles",
  nodos: [
    {
      slug: "pe2025-2027",
      titulo: "Plan Estratégico 2025-2027",
      descripcion:
        "Estrategia de Crecimiento y Competitividad Sostenible: las 38 acciones del cuadro resumen con su objetivo, eje y KPI por año, más los nuevos KPI con su medición, el responsable y el porcentaje de avance de cada una.",
      url: PE,
      principal: "Cuadro resumen",
      tipo: "app",
      icono: "Target",
      hijos: [
        {
          slug: "resumen",
          titulo: "Avance del Plan Estratégico",
          descripcion:
            "Cuánto avanzó cada objetivo, qué acciones están en riesgo y cuáles siguen sin responsable asignado.",
          url: `${PE}/resumen`,
          tipo: "tablero",
          icono: "BarChart3",
        },
        {
          slug: "crecimiento",
          titulo: "Estrategia de Crecimiento",
          descripcion:
            "Las 22 acciones de Retención y Fidelización, Diversificación Mercado y Diversificación Servicios.",
          url: `${PE}/crecimiento`,
          tipo: "tablero",
          icono: "TrendingUp",
        },
        {
          slug: "competitividad-sostenible",
          titulo: "Estrategia de Competitividad Sostenible",
          descripcion:
            "Las 16 acciones de costos, reconocimiento de marca, cambio cultural y sostenibilidad financiera.",
          url: `${PE}/competitividad-sostenible`,
          tipo: "tablero",
          icono: "Sprout",
        },
      ],
    },
  ],
};
