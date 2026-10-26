import type { Catalogo } from "./index";

const LIC = "https://licitaciones.anam.portalcenade.cl";
const PE = "https://pe.anam.portalcenade.cl";

/** ANAM — cliente 9. */
export const ANAM: Catalogo = {
  cliente: "anam",
  nombre: "ANAM",
  nodos: [
    {
      slug: "licitaciones",
      titulo: "Seguimiento de Licitaciones",
      descripcion:
        "Etapas, responsables y plazos con carta Gantt, documentos adjuntos y boletas de garantía. Incluye radar de licitaciones futuras y alertas por correo.",
      url: LIC,
      principal: "Seguimiento",
      tipo: "app",
      icono: "FileText",
      hijos: [
        {
          slug: "indicadores",
          titulo: "Indicadores de Licitaciones",
          descripcion:
            "Ratio de adjudicación, montos, frecuencia de participación e historial por cliente, segmentado por rubro.",
          url: `${LIC}/indicadores`,
          tipo: "tablero",
          icono: "BarChart3",
        },
        {
          slug: "ejecutivo",
          titulo: "Dashboard Licitaciones",
          descripcion:
            "Una sola pantalla para la gerencia general: cómo venimos, qué hay en el pipeline y qué exige decisión esta semana. Lista para imprimir.",
          url: `${LIC}/ejecutivo`,
          tipo: "tablero",
          icono: "Presentation",
        },
      ],
    },
    {
      slug: "pe2025-2027",
      titulo: "Plan Estratégico 2025-2027",
      descripcion:
        "Estrategia de Crecimiento y Competitividad Sostenible: las 41 acciones del cuadro resumen con su objetivo, eje y KPI por año, más el responsable y el porcentaje de avance de cada una.",
      url: PE,
      principal: "Planificación",
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
      ],
    },
  ],
};
