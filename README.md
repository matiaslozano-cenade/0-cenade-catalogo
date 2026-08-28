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

| Cliente | Export | Nodos |
| --- | --- | --- |
| Omamet (4) | `OMAMET` | 22 (21 navegables) |

Los demás clientes se van sumando acá a medida que se migran.

## Importante: el repo va público

`@cenade/portal-auth` se instala por `git+https`. Si el repo es privado, `npm install`
falla en Vercel sin decir por qué. Este repo se mantiene público por la misma razón.
