import type { Catalogo } from "./index";

const OP = "https://operaciones.omamet.portalcenade.cl";
const ADM = "https://administracion.omamet.portalcenade.cl";
const IND = "https://indicadores.omamet.portalcenade.cl";

/**
 * Omamet — cliente 4.
 *
 * Los títulos son los que ya usaban el portal y el selector de permisos: acá
 * no se renombra nada, solo se deja de repetir.
 */
export const OMAMET: Catalogo = {
  cliente: "omamet",
  nombre: "Omamet",
  nodos: [
    {
      slug: "pe2026",
      titulo: "Plan Estratégico 2026",
      descripcion:
        "Seguimiento de los 5 pilares estratégicos, 50 acciones y 70 etapas del PE 2026. Responsables, fechas, KPIs y % de avance en vivo.",
      url: "https://pe2026.omamet.portalcenade.cl",
      tipo: "tablero",
      icono: "Target",
    },
    {
      slug: "indicadores",
      titulo: "Indicadores de Gestión",
      descripcion:
        "Dashboards de indicadores por área: tiempos productivos, % rechazo, mantención preventiva y cumplimiento de fechas.",
      url: IND,
      tipo: "tablero",
      icono: "BarChart2",
      hijos: [
        {
          slug: "operaciones",
          titulo: "Operaciones",
          url: `${IND}/indicadores/operaciones`,
          tipo: "tablero",
          icono: "Settings2",
        },
        {
          slug: "finanzas",
          titulo: "Finanzas",
          url: `${IND}/indicadores/finanzas`,
          tipo: "tablero",
          icono: "DollarSign",
        },
        {
          slug: "comercial",
          titulo: "Comercial",
          url: `${IND}/indicadores/comercial`,
          tipo: "tablero",
          estado: "levantamiento",
          icono: "TrendingUp",
        },
      ],
    },
    {
      slug: "operaciones",
      titulo: "Operaciones",
      descripcion:
        "Seguimiento productivo de pedidos: bloque comercial autocompletado desde Notas de Venta, prioridad, motivo de atraso y fechas de producción.",
      url: OP,
      tipo: "app",
      icono: "AlertTriangle",
      hijos: [
        {
          slug: "atrasos",
          titulo: "Productos en proceso",
          url: `${OP}/atrasos`,
          tipo: "app",
          icono: "AlertTriangle",
          hijos: [
            {
              slug: "indicadores",
              titulo: "Indicadores de atrasos",
              url: `${OP}/atrasos/indicadores`,
              tipo: "tablero",
              icono: "BarChart3",
            },
            {
              slug: "materiales",
              titulo: "Materiales",
              url: `${OP}/atrasos/materiales`,
              tipo: "app",
              icono: "Package",
            },
          ],
        },
        {
          slug: "agendamiento",
          titulo: "Agendamiento",
          url: `${OP}/agendamiento`,
          tipo: "app",
          icono: "CalendarClock",
        },
        {
          slug: "planificacion",
          titulo: "Planificación",
          url: `${OP}/planificacion`,
          tipo: "app",
          icono: "GanttChartSquare",
          hijos: [
            {
              slug: "lagmet",
              titulo: "LAGMET",
              url: `${OP}/planificacion/lagmet`,
              tipo: "app",
              icono: "Factory",
            },
            {
              slug: "fundicion",
              titulo: "Fundición",
              url: `${OP}/planificacion/fundicion`,
              tipo: "app",
              icono: "Flame",
            },
            {
              slug: "mantenciones",
              titulo: "Mantenciones",
              url: `${OP}/planificacion/mantenciones`,
              tipo: "app",
              icono: "Wrench",
            },
            // Sin url: el programa del resto de Omamet (mecanizado y armado)
            // está pendiente de definir qué se programa y con qué datos.
            {
              slug: "omamet",
              titulo: "Omamet",
              tipo: "app",
              estado: "pronto",
              icono: "Factory",
            },
          ],
        },
      ],
    },
    {
      slug: "calidad",
      titulo: "Calidad",
      descripcion:
        "Control de calidad: registro de Productos No Conformes (rechazos) por defecto, área y acción, con costo de calidad e indicadores. Vinculado a las OT de Operaciones.",
      url: "https://calidad.omamet.portalcenade.cl/rechazos",
      tipo: "app",
      icono: "ClipboardX",
    },
    {
      slug: "administracion",
      titulo: "Administración",
      descripcion:
        "Ingreso de Notas de Venta con autocompletado desde el maestro de productos: al elegir el código Omamet se llenan la descripción, la aleación, el material base y el peso teórico. Incluye todo el historial de ventas.",
      url: ADM,
      tipo: "app",
      icono: "FileSpreadsheet",
      hijos: [
        {
          slug: "notas-venta",
          titulo: "Ingreso de Notas de Venta",
          url: `${ADM}/notas-venta`,
          tipo: "app",
          icono: "FileText",
        },
        {
          slug: "productos",
          titulo: "Maestro de Productos",
          url: `${ADM}/productos`,
          tipo: "registro",
          icono: "Boxes",
        },
        {
          slug: "ingenieria",
          titulo: "Ingeniería",
          url: `${ADM}/ingenieria`,
          tipo: "app",
          icono: "Ruler",
          hijos: [
            {
              slug: "fichas",
              titulo: "Fichas de Ingeniería",
              url: `${ADM}/ingenieria/fichas`,
              tipo: "app",
              icono: "ClipboardList",
            },
            {
              slug: "planificacion",
              titulo: "Planificación",
              url: `${ADM}/ingenieria/planificacion`,
              tipo: "app",
              icono: "GanttChartSquare",
            },
          ],
        },
      ],
    },
  ],
};
