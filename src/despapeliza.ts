import type { Catalogo } from "./index";

const IND = "https://financieros.despapeliza.portalcenade.cl";
const TEC = "https://tecnologia.despapeliza.portalcenade.cl";

/**
 * Despapeliza — cliente 5.
 *
 * El primer nivel son áreas de la empresa y llevan `grupo: true`: ordenan la
 * vista pero no son permisos. La rama de lo que cuelga de Finanzas sigue
 * siendo `facturacion`, no `finanzas.facturacion`.
 */
export const DESPAPELIZA: Catalogo = {
  cliente: "despapeliza",
  nombre: "Despapeliza",
  nodos: [
    {
      slug: "direccion",
      titulo: "Dirección",
      descripcion: "Gobierno y seguimiento estratégico",
      grupo: true,
      icono: "Landmark",
      hijos: [
        {
          slug: "pe2026",
          titulo: "Plan Estratégico 2026",
          descripcion:
            "Los 44 acuerdos de la Jornada Estratégica en 8 ejes: responsable, plazo, estado y avance.",
          url: "https://pe2026.despapeliza.portalcenade.cl",
          tipo: "tablero",
          icono: "Target",
        },
      ],
    },
    {
      slug: "finanzas",
      titulo: "Finanzas",
      descripcion: "Ingresos, egresos y facturación",
      grupo: true,
      icono: "Wallet",
      hijos: [
        {
          slug: "indicadores",
          titulo: "Indicadores Financieros",
          descripcion:
            "Ventas, egresos, cuentas por cobrar y pagar y flujo de caja, sincronizados a diario desde Chipax.",
          url: IND,
          principal: "Resumen",
          tipo: "tablero",
          icono: "BarChart3",
          hijos: [
            { slug: "ventas", titulo: "Ingresos", url: `${IND}/ventas`, tipo: "tablero", icono: "TrendingUp" },
            { slug: "egresos", titulo: "Egresos", url: `${IND}/egresos`, tipo: "tablero", icono: "Receipt" },
            { slug: "flujo-caja", titulo: "Flujo de Caja", url: `${IND}/flujo-caja`, tipo: "tablero", icono: "Wallet" },
            { slug: "detalle", titulo: "Detalle de Facturas", url: `${IND}/detalle`, tipo: "tablero", icono: "FileText" },
          ],
        },
        {
          slug: "facturacion",
          titulo: "Seguimiento de Facturación",
          descripcion:
            "Matriz mensual por cliente y servicio, con histórico desde 2021 y edición en línea.",
          url: "https://facturacion.despapeliza.portalcenade.cl",
          tipo: "app",
          icono: "FileSpreadsheet",
        },
        {
          slug: "cartolas",
          titulo: "Cartolas Tarjeta de Crédito",
          descripcion:
            "Convierte el estado de cuenta TC en PDF al formato de carga genérica, validado y listo para importar.",
          url: "https://cartolas.despapeliza.portalcenade.cl",
          tipo: "app",
          icono: "CreditCard",
        },
      ],
    },
    {
      slug: "comercial-area",
      titulo: "Comercial",
      descripcion: "Pipeline y conversión de ventas",
      grupo: true,
      icono: "Users",
      hijos: [
        {
          slug: "comercialvf",
          titulo: "Indicadores Comerciales VF",
          descripcion:
            "Indicadores comerciales leídos desde HubSpot. Primer módulo: los leads BDR por mes y por tipo.",
          url: "https://comercialvf.despapeliza.portalcenade.cl",
          tipo: "tablero",
          icono: "TrendingUp",
        },
      ],
    },
    {
      slug: "marketing-area",
      titulo: "Marketing",
      descripcion: "Canales, leads y costo por lead",
      grupo: true,
      icono: "Megaphone",
      hijos: [
        {
          slug: "leads",
          titulo: "Leads de Marketing",
          descripcion:
            "Los leads que van llegando por los formularios web (landing, contacto Despapeliza y Legale), guardados sin borrar.",
          url: "https://leads.despapeliza.portalcenade.cl",
          tipo: "tablero",
          icono: "Users",
        },
      ],
    },
    {
      slug: "tecnologia",
      titulo: "Tecnología",
      descripcion: "La fábrica de software",
      grupo: true,
      icono: "Cpu",
      hijos: [
        {
          slug: "ti",
          titulo: "Desarrollos",
          descripcion:
            "Actividad del producto Legale leída de GitHub: tickets, tiempos de resolución, entregas y equipo.",
          tipo: "tablero",
          icono: "Code2",
          hijos: [
            { slug: "desarrollos", titulo: "Desarrollos", url: `${TEC}/desarrollos`, tipo: "tablero", icono: "Code2" },
            { slug: "soporte", titulo: "Soporte", tipo: "tablero", estado: "pronto", icono: "LifeBuoy" },
          ],
        },
      ],
    },
    {
      slug: "transversal",
      titulo: "Transversal",
      descripcion: "Lo que usa toda la empresa",
      grupo: true,
      icono: "Layers",
      hijos: [
        {
          slug: "planificacion",
          titulo: "Planificación del Equipo",
          descripcion:
            "Agenda del equipo: tareas con responsable, plazo y prioridad, en calendario, tablero o por persona.",
          url: "https://planificacion.despapeliza.portalcenade.cl",
          tipo: "app",
          icono: "CalendarDays",
        },
        {
          slug: "web",
          titulo: "Página de Despapeliza",
          descripcion:
            "Réplica congelada de despapeliza.io para revisar textos y diseño sin tocar el sitio productivo.",
          url: "https://web.despapeliza.portalcenade.cl",
          tipo: "sitio",
          icono: "Globe",
        },
        {
          slug: "gestion-documental",
          titulo: "Gestión Documental",
          descripcion:
            "Carga, firma electrónica, trazabilidad y resguardo en línea de documentos.",
          tipo: "app",
          estado: "pronto",
          icono: "ShieldCheck",
        },
      ],
    },
  ],
};
