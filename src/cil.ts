import type { Catalogo } from "./index";

const IND = "https://indicadores.cil.portalcenade.cl";

/** C.I.L. Servicios Industriales — cliente 6. Cerrado en jul-2026; el portal
 *  queda operativo pero sin acceso compartido. */
export const CIL: Catalogo = {
  cliente: "cil",
  nombre: "C.I.L. Servicios Industriales",
  nodos: [
    {
      slug: "capacitaciones",
      titulo: "Registro de Capacitaciones",
      descripcion:
        "Kiosko de registro de asistencia a capacitaciones del programa anual. 174 personas · 42 temas.",
      url: "https://capacitaciones.cil.portalcenade.cl",
      tipo: "app",
      icono: "BookOpen",
    },
    {
      slug: "trazabilidad",
      titulo: "Trazabilidad Documental",
      descripcion:
        "Reconstruye el círculo Cotización → OC → Factura cruzando ventas, PDF de factura y cotizaciones. Diagnóstico por colores.",
      url: "https://trazabilidad.cil.portalcenade.cl",
      tipo: "app",
      icono: "GitBranch",
    },
    {
      slug: "indicadores",
      titulo: "Indicadores de Gestión",
      descripcion:
        "Gráficos evolutivos de las 4 plantas (Producción, Calidad, Seguridad, RRHH, Bonos, Costos). Carga mensual de los Excel a la base.",
      url: IND,
      tipo: "tablero",
      icono: "BarChart3",
      hijos: [
        { slug: "produccion", titulo: "Producción", url: `${IND}/indicadores/produccion`, tipo: "tablero", icono: "Factory" },
        { slug: "calidad", titulo: "Calidad", url: `${IND}/indicadores/calidad`, tipo: "tablero", icono: "BadgeCheck" },
        { slug: "microbiologia", titulo: "Microbiología", url: `${IND}/indicadores/microbiologia`, tipo: "tablero", icono: "FlaskConical" },
        { slug: "capacitacion", titulo: "Capacitación", url: `${IND}/indicadores/capacitacion`, tipo: "tablero", icono: "GraduationCap" },
        { slug: "seguridad", titulo: "Seguridad", url: `${IND}/indicadores/seguridad`, tipo: "tablero", icono: "ShieldAlert" },
        { slug: "rrhh", titulo: "RRHH", url: `${IND}/indicadores/rrhh`, tipo: "tablero", icono: "Users" },
        { slug: "bonos", titulo: "Bonos", url: `${IND}/indicadores/bonos`, tipo: "tablero", icono: "Coins" },
        { slug: "costos", titulo: "Costos", url: `${IND}/indicadores/costos`, tipo: "tablero", icono: "DollarSign" },
      ],
    },
  ],
};
