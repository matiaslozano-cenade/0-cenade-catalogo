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
      slug: "leads",
      titulo: "Leads y Diagnósticos",
      url: "https://leads.cenade.portalcenade.cl",
      tipo: "app",
      icono: "ClipboardList",
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
