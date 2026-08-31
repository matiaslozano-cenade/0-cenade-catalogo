import type { Catalogo } from "./index";

const IND = "https://indicadores.demo.portalcenade.cl";

/** Demo — cliente 8. Portal demostrativo con datos inventados. */
export const DEMO: Catalogo = {
  cliente: "demo",
  nombre: "Demo",
  nodos: [
    {
      slug: "indicadores",
      titulo: "Indicadores de Gestión",
      descripcion:
        "Dashboards ejecutivos de Finanzas (EERR, balance, flujo de caja, KPIs) y de Productividad y Operaciones. Gráficos con etiquetas y detalle por período.",
      url: IND,
      principal: "Resumen ejecutivo",
      tipo: "tablero",
      icono: "BarChart3",
      hijos: [
        { slug: "finanzas", titulo: "Finanzas", url: `${IND}/finanzas`, tipo: "tablero", icono: "Wallet" },
        { slug: "operaciones", titulo: "Operaciones", url: `${IND}/operaciones`, tipo: "tablero", icono: "Settings2" },
      ],
    },
    {
      slug: "pe2026",
      titulo: "Plan Estratégico 2026",
      url: "https://pe2026.demo.portalcenade.cl",
      tipo: "tablero",
      icono: "Target",
    },
    {
      slug: "bodega3d",
      titulo: "Bodega 3D en vivo",
      url: "https://bodega3d.demo.portalcenade.cl",
      tipo: "app",
      icono: "Boxes",
    },
  ],
};
