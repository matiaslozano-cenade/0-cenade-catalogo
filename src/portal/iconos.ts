import {
  Activity, AlertTriangle, BadgeCheck, BarChart2, BarChart3, BookOpen,
  Boxes, Building2, Calculator, CalendarClock, CalendarDays, ClipboardList,
  ClipboardX, Code2, Coins, Cpu, CreditCard, DollarSign,
  Droplets, Factory, FileSpreadsheet, FileText, Flame, FlaskConical,
  FolderKanban, GanttChartSquare, Gavel, GitBranch, Globe, GraduationCap,
  HeartHandshake, Landmark, Layers, LifeBuoy, ListChecks, Megaphone, Mic,
  Monitor, MousePointerClick, Network, Package, PackageSearch, Presentation,
  Printer, Receipt, Ruler, Settings2, ShieldAlert, ShieldCheck, ShoppingCart,
  Sprout, Store, Tags, Target, Ticket, Timer, TrendingUp,
  Truck, Upload, Users, Wallet, Wrench,
  LayoutGrid,
} from "lucide-react";
import type { ComponentType } from "react";

// El catálogo guarda el nombre del icono, no el componente. Este mapa es el
// único lugar donde se resuelve: antes había una copia por portal y las que
// quedaban atrás pintaban un círculo vacío. Un icono nuevo en el catálogo se
// agrega acá, una sola vez.
const MAPA: Record<string, ComponentType<{ className?: string }>> = {
  Activity, AlertTriangle, BadgeCheck, BarChart2, BarChart3, BookOpen,
  Boxes, Building2, Calculator, CalendarClock, CalendarDays, ClipboardList,
  ClipboardX, Code2, Coins, Cpu, CreditCard, DollarSign,
  Droplets, Factory, FileSpreadsheet, FileText, Flame, FlaskConical,
  FolderKanban, GanttChartSquare, Gavel, GitBranch, Globe, GraduationCap,
  HeartHandshake, Landmark, Layers, LifeBuoy, ListChecks, Megaphone, Mic,
  Monitor, MousePointerClick, Network, Package, PackageSearch, Presentation,
  Printer, Receipt, Ruler, Settings2, ShieldAlert, ShieldCheck, ShoppingCart,
  Sprout, Store, Tags, Target, Ticket, Timer, TrendingUp,
  Truck, Upload, Users, Wallet, Wrench,
};

export function icono(nombre?: string) {
  return (nombre && MAPA[nombre]) || LayoutGrid;
}
