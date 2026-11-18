# 0-cenade-catalogo

Catálogo único de apps por cliente. Se instala como `@cenade/catalogo`.

## Por qué existe

El árbol de apps de cada cliente vivía escrito **tres veces**:

1. en el portal de inicio del cliente (`{n}-{cliente}-inicio/app/page.tsx`),
2. en el selector de permisos del hub maestro (`0-cenade-inicio/app/config/ConfigClient.tsx`),
3. en el `proxy.ts` de cada app.

Tres copias que se mantenían a mano y se desincronizaban solas: agregar una app obligaba a
tocar dos repos y no había forma de saber si quedaron iguales. Acá el árbol está una vez, y
de acá salen las tres.

## La rama de permiso

La rama de un nodo es la unión de los slugs de sus ancestros con el suyo:

```
operaciones . planificacion . lagmet
   área          módulo        vista
```

Es exactamente lo que compara `puedeVer` de `@cenade/portal-auth` y lo que comprueba el
`proxy.ts` del portal de destino. Por eso cada `slug` del catálogo es **un solo segmento**,
nunca la rama completa.

## Un nodo con hijos no navega: hay que ofrecer su pantalla aparte

Cuando un nodo tiene hijos, su título pasa a desplegar y deja de navegar. Si además tiene
una pantalla propia de verdad, hay que ofrecerla como primera fila del desplegable o se
vuelve inalcanzable desde el portal — le pasó a la tabla de Productos en proceso de Omamet.
Para eso está `principal`: el nombre con el que se ofrece esa pantalla.

Los nodos que solo listan lo que ya se ve —los hubs de área— **no llevan `url`**. Así el
portal no reintroduce la parada intermedia que se sacó a propósito.

| Nodo | Qué es | Cómo queda |
| --- | --- | --- |
| Productos en proceso | Tabla de seguimiento + 2 vistas | `url` + `principal: "Seguimiento de pedidos"` |
| Planificación (Omamet) | Solo lista sus 4 programas | sin `url` |
| Indicadores Financieros | Resumen + 4 vistas | `url` + `principal: "Resumen"` |
| Tecnología (Despapeliza) | Solo lista sus paneles | sin `url` |

## Tres niveles, y no más

`NIVELES_MAX = 3`: área → módulo → vista. Lo que aparezca más abajo va como pestaña dentro
de la vista, no como rama nueva del portal. Es la regla que impide que el árbol se vuelva
inmanejable cuando el portal crezca.

Y un solo eje por nivel: el primer nivel es **el área de la empresa**, nunca el tipo de
herramienta. Lo que la pieza *es* va en `tipo` (`tablero` / `app` / `registro` / `carga` /
`sitio`), que es una etiqueta, no una carpeta. Cuando un área pasa de ~7 herramientas se
parte en sub-áreas, jamás en "tipos".

## API

| Función | Para qué |
| --- | --- |
| `recorrer(nodos)` | Cada nodo con su rama y sus ancestros |
| `hojas(nodos)` | Solo lo navegable (tiene `url`), con su contexto — alimenta el buscador |
| `podar(nodos, permite)` | Deja lo que la cuenta puede ver; se le pasa `puedeVer` |
| `arbolDePermisos(nodos)` | El árbol que consume el selector de permisos del hub |

El paquete **no importa iconos**: `icono` es el nombre del icono de lucide-react y lo
resuelve quien pinta. Así el catálogo no arrastra dependencias de UI.

## Clientes

| Cliente | Export | Ramas | Pantallas |
| --- | --- | --- | --- |
| Cenade (0) | `CENADE` | 4 | 4 |
| Indra Repuestos (1) | `INDRA` | 16 | 16 |
| Hidrogistica (2) | `HIDROGISTICA` | 5 | 5 |
| Chamonate (3) | `CHAMONATE` | 12 | 9 |
| Omamet (4) | `OMAMET` | 23 | 22 |
| Despapeliza (5) | `DESPAPELIZA` | 22 | 20 |
| C.I.L. (6) | `CIL` | 11 | 11 |
| Mardones (7) | `MARDONES` | 14 | 9 |
| Demo (8) | `DEMO` | 5 | 5 |
| ANAM (9) | `ANAM` | 3 | 3 |
| Ecoriles (10) | `ECORILES` | 4 | 4 |
| **Total** | | **114** | **103** |

La diferencia entre ramas y pantallas son los nodos que agrupan, los que están por
construirse (`estado: "pronto"`) y los `oculto: true`.

## Marcas de un nodo

| Campo | Qué significa |
| --- | --- |
| `grupo` | Ordena la vista pero no entra en la rama de permiso (las áreas de Despapeliza) |
| `oculto` | Existe como rama pero no se pinta (`pemrc`/`peespi`, que ya se ven dentro de su división) |
| `principal` | Cómo se ofrece la pantalla propia de un nodo que además tiene hijos |
| `directo` | La app tiene su propio menú (ERP): en el portal la tarjeta va directo a su `url` y no despliega los hijos, que siguen siendo las ramas de permiso y el menú de la app (Operaciones de Omamet, desde 2026-11-01) |
| `sso` | Hay que entrar con `SSOLink`, no con un enlace normal (KPI Gerencias de Indra) |
| `estado` | `levantamiento` o `pronto`: se muestra marcado y sin enlace |

## Importante: el repo va público

`@cenade/portal-auth` se instala por `git+https`. Si el repo es privado, `npm install`
falla en Vercel sin decir por qué. Este repo se mantiene público por la misma razón.

## Portal de inicio: un solo dibujo para todos los clientes (`@cenade/catalogo/portal`)

Desde la versión 1.3.0 el paquete también trae **cómo se ve** el portal de inicio, no solo el árbol.
Antes cada `{n}-{cliente}-inicio` tenía su copia de `Rama.tsx`, `Buscador.tsx`, `iconos.ts` y el CSS,
y las copias se desviaban solas (íconos faltantes, botones de sesión distintos, `directo` solo en Omamet).

```tsx
// app/layout.tsx
import "@cenade/catalogo/portal.css";

// app/page.tsx
import { Portal } from "@cenade/catalogo/portal";

<Portal
  nombre="Omamet"
  acento="#10b981"                       // lo único que cambia entre clientes
  logo={<Image src="/omamet-logo.jpeg" … />}
  nodos={nodos}                          // ya podados con puedeVer
  usuario={perfil?.nombre}
  acciones={<BotonSalir className="pc-btn">Salir</BotonSalir>}
/>
```

- **Disposición:** barra angosta (logo y sesión) y una sola tabla con columnas fijas
  —Pantalla · Descripción · Tipo— y una banda por área. Estilo en `src/portal/portal.css`
  (CSS plano con prefijo `pc-`, no depende de Tailwind).
- **Detalles de diseño (18-11-2026, «que no se vea tan IA»):** saludo con fecha en hora de Chile sobre el
  título (`Saludo.tsx`, se calcula en el navegador porque hay portales estáticos); nombre del cliente en
  serif cursiva; filas del primer nivel numeradas 01, 02…; entrada escalonada de las filas, áreas que
  abren deslizando, ícono que se inclina al pasar el mouse; trama de puntos de fondo y filete del
  acento bajo la barra. Todo respeta `prefers-reduced-motion`.
- **Navegación:** las apps abren en la **misma pestaña**; solo `tipo: "sitio"` abre aparte.
  Abrir en pestaña nueva dejaba un portal duplicado cada vez que se usaba «Volver al portal».
- **Íconos:** el mapa nombre → ícono vive solo en `src/portal/iconos.ts`. Un ícono nuevo se agrega ahí.
- **Para cambiar el diseño de todos los portales:** editar `portal.css` / `Portal.tsx`, pushear,
  y en cada portal `npm update @cenade/catalogo` (el lockfile clava el commit).
