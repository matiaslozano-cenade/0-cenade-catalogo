import type { Catalogo } from "./index";

/** Cenade — cliente 0. Los desarrollos internos de la consultora. */
export const CENADE: Catalogo = {
  cliente: "cenade",
  nombre: "Cenade",
  nodos: [
    {
      slug: "planificacion",
      titulo: "Planificación de clientes",
      url: "https://planificacion.portalcenade.cl",
      tipo: "app",
      icono: "CalendarDays",
    },
    {
      slug: "tareas",
      titulo: "Tareas del equipo",
      descripcion:
        "Lo que nos pedimos entre nosotros: tareas internas con responsable, fecha comprometida y etiqueta, sin pasar por un cliente.",
      url: "https://tareas.cenade.portalcenade.cl",
      tipo: "app",
      icono: "ListChecks",
    },
    {
      slug: "leads",
      titulo: "Leads y Diagnósticos",
      url: "https://leads.cenade.portalcenade.cl",
      tipo: "app",
      icono: "ClipboardList",
    },
    {
      slug: "prospeccion",
      titulo: "CRM Cenade",
      descripcion:
        "En qué porcentaje va la campaña de correos y el seguimiento de cada posible cliente: etapa, próxima acción y las propuestas adjuntas.",
      url: "https://prospeccion.cenade.portalcenade.cl",
      tipo: "app",
      icono: "Target",
    },
    {
      slug: "web",
      titulo: "Sitio web público",
      url: "https://cenade.cl",
      tipo: "sitio",
      icono: "Globe",
    },
    {
      slug: "sdi",
      titulo: "Sitio web SDI",
      url: "https://sdi.cenade.portalcenade.cl",
      tipo: "sitio",
      icono: "Printer",
    },
  ],
};
