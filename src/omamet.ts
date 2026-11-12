import type { Catalogo } from "./index";

const OP = "https://operaciones.omamet.portalcenade.cl";
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
        "ERP de Omamet: cotizaciones y costos, productos en proceso, agendamiento, ingeniería, planificación, adquisiciones y calidad en un solo lugar, con menú lateral.",
      // Pedido del usuario (2026-11-01): apretar Operaciones lleva al ERP, que
      // tiene su propio menú con estas mismas opciones filtradas por permiso.
      url: `${OP}/`,
      directo: true,
      tipo: "app",
      icono: "AlertTriangle",
      hijos: [
        {
          // Pedido del usuario (2026-11-12): Cotizaciones y Hoja de costos se
          // mudaron desde Administración. La ruta manda el permiso, por eso
          // viven bajo /comercial.
          slug: "comercial",
          titulo: "Cotizaciones y costos",
          tipo: "app",
          icono: "Calculator",
          hijos: [
            {
              slug: "cotizaciones",
              titulo: "Cotizaciones",
              url: `${OP}/comercial/cotizaciones`,
              descripcion: "Presupuesto de Fabricación del Excel, con historial de cotizaciones.",
              tipo: "app",
              icono: "FileText",
            },
            {
              slug: "costos",
              titulo: "Hoja de costos",
              url: `${OP}/comercial/costos`,
              descripcion: "Qué cuentas van al costo y el costo indirecto por hora de Fundición y Mecanizado.",
              tipo: "app",
              icono: "Calculator",
            },
          ],
        },
        {
          slug: "atrasos",
          titulo: "Productos en proceso",
          url: `${OP}/atrasos`,
          // La tabla de seguimiento es una pantalla de verdad: sin esto queda
          // inalcanzable, porque el título con hijos solo despliega.
          principal: "Seguimiento de pedidos",
          descripcion: "Seguimiento productivo de cada línea de las Notas de Venta: prioridad, atraso y fechas de producción.",
          tipo: "app",
          icono: "AlertTriangle",
          hijos: [
            {
              slug: "indicadores",
              titulo: "Indicadores de atrasos",
              url: `${OP}/atrasos/indicadores`,
              descripcion: "Atrasos, saldos, prioridades, planos de ingeniería y hornos de Fundición.",
              tipo: "tablero",
              icono: "BarChart3",
            },
            {
              slug: "materiales",
              titulo: "Materiales",
              url: `${OP}/atrasos/materiales`,
              descripcion: "Materia pendiente por material y aleación.",
              tipo: "app",
              icono: "Package",
            },
          ],
        },
        {
          slug: "agendamiento",
          titulo: "Agendamiento",
          url: `${OP}/agendamiento`,
          descripcion: "Agenda comercial y operacional de los despachos por Nota de Venta.",
          tipo: "app",
          icono: "CalendarClock",
        },
        {
          // Pedido del usuario (2026-11-12): Ingeniería (fichas y planificación)
          // se mudó desde Administración.
          slug: "ingenieria",
          titulo: "Ingeniería",
          tipo: "app",
          icono: "Ruler",
          hijos: [
            {
              slug: "fichas",
              titulo: "Fichas de Ingeniería",
              url: `${OP}/ingenieria/fichas`,
              descripcion: "Recorrido de cada línea de Nota de Venta: información → material → modelo → levantamiento → plano → OT mecánica.",
              tipo: "app",
              icono: "ClipboardList",
            },
            {
              slug: "planificacion",
              titulo: "Planificación de Ingeniería",
              url: `${OP}/ingenieria/planificacion`,
              descripcion: "Carta Gantt diaria por encargado, con proceso, avance e inicio/fin.",
              tipo: "app",
              icono: "GanttChartSquare",
            },
          ],
        },
        {
          slug: "planificacion",
          titulo: "Planificación",
          tipo: "app",
          icono: "GanttChartSquare",
          hijos: [
            {
              slug: "lagmet",
              titulo: "LAGMET",
              url: `${OP}/planificacion/lagmet`,
              descripcion: "Programa de mecanizado por máquina y carta Gantt.",
              tipo: "app",
              icono: "Factory",
            },
            {
              slug: "fundicion",
              titulo: "Fundición",
              url: `${OP}/planificacion/fundicion`,
              descripcion: "Coladas por horno, notas de venta y calendario.",
              tipo: "app",
              icono: "Flame",
            },
            {
              slug: "mantenciones",
              titulo: "Mantenciones",
              url: `${OP}/planificacion/mantenciones`,
              descripcion: "Plan preventivo, órdenes de trabajo y estado de máquinas.",
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
        },        {
          slug: "adquisiciones",
          titulo: "Solicitud de Adquisiciones",
          url: `${OP}/adquisiciones`,
          descripcion: "Solicitudes de compra de OMAMET y LAGMET con centro de costos.",
          tipo: "app",
          icono: "ShoppingCart",
        },
      ],
    },
    {
      slug: "eerr",
      titulo: "Estado de Resultados",
      descripcion:
        "Desviaciones del consolidado mensual contra el presupuesto: por cuenta contable, por gran cuenta y por grupo, del mes o acumulado del año. Se carga el mismo archivo que envía la empresa, sin editarlo.",
      url: "https://eerr.omamet.portalcenade.cl",
      tipo: "tablero",
      icono: "Landmark",
    },
    {
      slug: "calidad",
      titulo: "Calidad",
      descripcion:
        "Control de calidad: registro de Productos No Conformes (rechazos) por defecto, área y acción, con costo de calidad e indicadores. Vinculado a las OT de Operaciones.",
      url: "https://calidad.omamet.portalcenade.cl/rechazos",
      // Nombre de su pantalla en el menú del ERP de Operaciones.
      principal: "Rechazos · PNC / NC",
      tipo: "app",
      icono: "ClipboardX",
    },
    // Administración (cotizaciones, hoja de costos e ingeniería) se fundió en
    // el ERP de Operaciones el 2026-11-12, a pedido del usuario. El proyecto
    // 4-omamet-administracion solo redirige sus URLs viejas al ERP.
  ],
};
