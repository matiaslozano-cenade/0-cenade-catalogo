import type { Catalogo } from "./index";

const IND = "https://indicadores-";
const TI = "https://indicadores-ti.indra.portalcenade.cl";

/** Indra Repuestos — cliente 1. */
export const INDRA: Catalogo = {
  cliente: "indra",
  nombre: "Indra Repuestos",
  nodos: [
    {
      slug: "kpigerencia",
      titulo: "KPI Gerencias",
      descripcion:
        "Indicadores mensuales por gerencia con semáforos. Cada área ingresa sus KPIs y los visualiza con tendencias y desviación vs. meta.",
      url: "https://kpigerencia.indra.portalcenade.cl",
      tipo: "tablero",
      icono: "BarChart3",
      // Única app con SSO propio (/auth/sso): el portal la abre con SSOLink.
      sso: true,
    },
    {
      slug: "indicadores",
      titulo: "Desarrollo de Indicadores",
      descripcion:
        "Indicadores evolutivos por área: Finanzas, Comercial, Abastecimiento, Logística y TI. Cada área con su propio panel de datos.",
      tipo: "tablero",
      icono: "TrendingUp",
      hijos: [
        { slug: "finanzas", titulo: "Finanzas", descripcion: "Presupuesto 2026 mes a mes, EERR real contra presupuesto y principales desviaciones del mes. Histórico 2018–2026.", url: `${IND}finanzas.indra.portalcenade.cl`, tipo: "tablero", icono: "TrendingUp" },
        { slug: "comercial", titulo: "Comercial", descripcion: "Ventas, margen bruto, sucursales y canales, marcas y segmentos de cliente. Histórico 2017–2026 con Meta 2026.", url: `${IND}comercial.indra.portalcenade.cl`, tipo: "tablero", icono: "ShoppingCart" },
        { slug: "abastecimiento", titulo: "Abastecimiento", descripcion: "Lead Time total (proveedor + transporte), quiebres de stock y sobrestock por clase ABC.", url: `${IND}abastecimiento.indra.portalcenade.cl`, tipo: "tablero", icono: "Package" },
        { slug: "logistica", titulo: "Logística", descripcion: "Costo logístico / ventas del CD Malloco y otros indicadores de nivel de servicio.", url: `${IND}logistica.indra.portalcenade.cl`, tipo: "tablero", icono: "Truck" },
        {
          slug: "ti",
          titulo: "TI", descripcion: "Tickets de la mesa de ayuda, avance de proyectos, disponibilidad de sistemas y tiempos operativos de Soporte TI.",
          tipo: "tablero",
          icono: "Monitor",
          hijos: [
            { slug: "proyectos", titulo: "Proyectos", descripcion: "Cartera de proyectos TI con % de avance editable por proyecto.", url: `${TI}/proyectos`, tipo: "tablero", icono: "FolderKanban" },
            { slug: "tickets", titulo: "Tickets", descripcion: "Volumen de tickets (creados vs. cerrados), tiempo de resolución y distribución por servicio.", url: `${TI}/tickets`, tipo: "tablero", icono: "Ticket" },
            { slug: "tiempos-operativos", titulo: "Tiempos Operativos", descripcion: "Trabajos de Soporte TI por categoría: plazos ANS promedio, cumplimiento y abiertos.", url: `${TI}/tiempos-operativos`, tipo: "tablero", icono: "Timer" },
            { slug: "disponibilidad", titulo: "Disponibilidad", descripcion: "Disponibilidad de la infraestructura crítica y tiempos de caída por categoría (monitoreo PRTG).", url: `${TI}/disponibilidad`, tipo: "tablero", icono: "Activity" },
          ],
        },
      ],
    },
    {
      slug: "pe2026",
      titulo: "Plan Estratégico 2026",
      descripcion:
        "Seguimiento de las 44 acciones del PE 2026. Asigna responsables, registra avance, fechas y bitácora por acción. Días restantes calculados en vivo.",
      url: "https://pe2026.indra.portalcenade.cl",
      tipo: "tablero",
      icono: "Target",
    },
    {
      slug: "acuerdos",
      titulo: "Acuerdos Directorio",
      descripcion:
        "Registro y seguimiento de los acuerdos de cada sesión de directorio: responsables, fechas de compromiso, estado y bitácora de avances.",
      url: "https://acuerdos.indra.portalcenade.cl",
      tipo: "app",
      icono: "Gavel",
    },
    {
      slug: "abastecimiento-area",
      titulo: "Abastecimiento",
      descripcion: "Compra sugerida y catálogos de repuestos por marca.",
      grupo: true,
      icono: "Package",
      hijos: [
        {
          slug: "reposicion",
          titulo: "Modelo de Reposición",
          descripcion:
            "Carga los extractos de SAP y obtén la compra sugerida por proveedor, alertas de sobrestock y redistribución entre locales. Tablero, filtros y Excel descargable. Se procesa en tu navegador.",
          url: "https://reposicion.indra.portalcenade.cl",
          tipo: "app",
          icono: "PackageSearch",
        },
        {
          slug: "catalogos",
          titulo: "Catálogos de Repuestos",
          descripcion:
            "Todas las marcas en un solo catálogo H&Q (Volkswagen, Chery, Fiat, Audi, SEAT y Skoda): foto, código H&Q, OE origen y equivalencias, con filtros por marca y familia. Público con el enlace, en 4 idiomas.",
          url: "https://catalogos.indra.portalcenade.cl",
          tipo: "app",
          icono: "BookOpen",
        },
        {
          slug: "catalogo-chery",
          titulo: "Catálogo Chery",
          descripcion:
            "Catálogo H&Q solo de Chery: foto de cada pieza, código H&Q, OE origen y equivalencias. Público con el enlace, en 4 idiomas.",
          url: "https://catalogo-chery.indra.portalcenade.cl",
          tipo: "app",
          icono: "BookOpen",
        },
      ],
    },
    {
      slug: "digitalizacion-logistica",
      titulo: "Digitalización Logística",
      descripcion:
        "Las listas de empaque de los proveedores entran como PDF, quedan guardadas y se convierten en la cola de trabajo de bodega. Cada persona toma una línea, la baja del contenedor y la marca lista.",
      url: "https://digitalizacion.indra.portalcenade.cl",
      tipo: "app",
      icono: "Boxes",
    },
    {
      slug: "organigrama",
      titulo: "Organigrama",
      descripcion:
        "Construye y reordena la estructura sobre la nómina real: arrastra unidades para cambiar la línea de reporte, agrupa varias bajo una jefatura nueva, agrega o elimina, y exporta la lámina a PNG o PPTX.",
      url: "https://organigrama.indra.portalcenade.cl",
      tipo: "app",
      icono: "Network",
    },
  ],
};
