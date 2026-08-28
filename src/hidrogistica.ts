import type { Catalogo } from "./index";

const PE = "https://pe.hidrogistica.portalcenade.cl";

/** Hidrogistica — cliente 2. */
export const HIDROGISTICA: Catalogo = {
  cliente: "hidrogistica",
  nombre: "Hidrogistica",
  nodos: [
    {
      slug: "pe",
      titulo: "Plan Estratégico 2026-2028",
      descripcion:
        "Seguimiento del PE 2026-2028. 3 áreas (Servicio Mercado del Agua, Cadena de Suministro, Operación Logística), 73 acciones. Cada área tiene su propio panel con responsables, avances y bitácora.",
      url: PE,
      tipo: "tablero",
      icono: "Target",
      hijos: [
        // Los slugs salen de 2_hidrogistica_pe2026_areas: son los que sirve el panel.
        { slug: "servicio-mercado-del-agua", titulo: "Servicio Mercado del Agua", url: `${PE}/servicio-mercado-del-agua`, tipo: "tablero", icono: "Droplets" },
        { slug: "cadena-de-suministro", titulo: "Cadena de Suministro", url: `${PE}/cadena-de-suministro`, tipo: "tablero", icono: "Boxes" },
        { slug: "operacion-logistica", titulo: "Operación Logística", url: `${PE}/operacion-logistica`, tipo: "tablero", icono: "Truck" },
      ],
    },
    {
      slug: "licitaciones",
      titulo: "Seguimiento de Licitaciones",
      descripcion:
        "Gestión de licitaciones con sus etapas, responsables y plazos. Carta Gantt de avance por licitación, detección de etapas atrasadas y edición en línea.",
      url: "https://licitaciones.hidrogistica.portalcenade.cl",
      tipo: "app",
      icono: "Gavel",
    },
  ],
};
