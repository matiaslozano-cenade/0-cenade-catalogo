import type { Catalogo } from "./index";

const LIC = "https://licitaciones.anam.portalcenade.cl";

/** ANAM — cliente 9. Todo cuelga de la app de licitaciones. */
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
  ],
};
