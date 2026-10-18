# Guía de estudio · React para la prueba técnica

**Meta:** conseguir el primer trabajo en desarrollo web. El primer hito es la prueba técnica de React, a finales de noviembre de 2026: llegar con la capacidad de construir sin ayuda (sin video ni IA) una app con React, TypeScript, rutas, consumo de una API y pruebas automáticas.

**Curso base:** [React: De cero a experto](https://www.udemy.com/course/react-cero-experto/), de Fernando Herrera. Es la versión renovada en enero de 2026: 30 secciones, 46 h de video, React 19 con TypeScript, Tailwind, shadcn, TanStack Query, Zustand, React Router 7 y Vitest.

## La prueba

Llena esta tabla en la semana 1. Lo que no sepas, pregúntaselo al reclutador: con esto se decide la semana 6 y qué recortar si te atrasas.

| Dato | Respuesta |
|---|---|
| Empresa y cargo | |
| Fecha | |
| Formato | En vivo / para la casa |
| Duración | |
| JavaScript o TypeScript | |
| ¿Incluye backend? | |
| ¿Piden pruebas automáticas? | |
| Qué evalúan | |

## Cómo funciona esta guía

Cada semana tiene su carpeta con tres cosas:

1. **Lección** (`README.md`): qué secciones del curso ver, lo que necesitas saber y por qué importa en la prueba.
2. **Práctica**: ejercicios con pruebas automáticas (`npm test -- semana-01`) y un reto que haces sin ayuda, con criterios claros de "terminado".
3. **Preparación de la prueba**: preguntas de entrevista y una tarea pequeña.

Las semanas se preparan una a la vez, según cómo te fue en la anterior. Cuando termines una, abre esta carpeta en Claude Code y escribe:

> Revisa mi semana 1 y prepara la semana 2.

### Rutina semanal (unas 14 horas)

El curso tiene 46 h de video. Con pausas para escribir el código, ejercicios y retos, se necesitan unas 14 h por semana.

| Día | Tiempo | Qué hacer |
|---|---|---|
| Lunes a viernes | 2 h | Curso y ejercicios |
| Sábado | 4 h | Reto, preguntas de entrevista, commit y push |
| Domingo | — | Descanso |

## Mapa de semanas

| Semana | Fechas | Secciones del curso | Video | HTML y CSS | Entregable hecho por ti | Estado |
|---|---|---|---|---|---|---|
| [S1](semana-01-fundamentos/) | 19 – 25 oct | 1–4: intro, refuerzo JS/TS, primeros pasos | 5 h | HTML lo justo para JSX (en la lección) | 20 ejercicios de JS/TS y carrito básico | Lista |
| S2 | 26 oct – 1 nov | 5–8: testing, GifExpertApp, despliegue | 7 h | Modelo de caja y flexbox (3 h) | GifExpertApp publicada, 5 pruebas tuyas y el carrito maquetado con flexbox | Se prepara al terminar S1 |
| S3 | 2 – 8 nov | 9–12: hooks, useReducer, memorización, Context | 7 h | Grid y diseño responsive (3 h) | App de tareas con useReducer, Context y localStorage que se ve bien en el celular | |
| S4 | 9 – 15 nov | 13–17: HeroesApp, caché, búsquedas, testing | 10 h | Tailwind (1,5 h) | HeroesApp con rutas y búsqueda por query string | |
| S5 | 16 – 22 nov | 18–21 y 23: panel admin, auth, formularios | 7 h | Formularios accesibles (1 h) | Panel con login y CRUD de productos | |
| S6 | 23 – 29 nov | 24–30 (MERN) o simulacros | 9 h | Repaso en los simulacros | Según el tipo de prueba | |

**Semana 6:** si la prueba incluye backend, haces las secciones MERN (Node, Express y Mongo). Si es solo frontend, te las saltas y haces 3 simulacros cronometrados. En los dos casos, el último simulacro va en los días antes de la prueba.

## La pista de HTML y CSS

El curso da por sabido HTML y CSS, y en la prueba también cuenta que la app se vea ordenada y funcione en el celular. Por eso va una pista corta cada semana, pegada al reto: aprendes flexbox y lo usas ese mismo sábado en tu app.

El orden importa. Desde la HeroesApp (semana 4) el curso usa Tailwind, que son clases de CSS con otro nombre: si ya sabes flexbox y grid, Tailwind se aprende en una tarde; si no, se vuelve copiar clases sin entenderlas.

Las horas salen de recortes que ya vienen aplicados:

- Las secciones de testing (5, 8 y 16, unas 8 h de video) se ven a 1,5x, escribiendo pocas pruebas propias.
- La sección 11 (memorización) también a 1,5x.
- La sección 22 (carga de archivos) se salta.

Esto es lo mínimo para la prueba, no todo CSS. Después de la prueba, CSS a fondo es lo primero de la siguiente etapa.

**Si aun así te atrasas,** recorta el bloque MERN si la prueba es solo frontend, y después las pruebas propias de cada semana. Nunca recortes los retos ni la pista de CSS: son lo más parecido a la prueba.

## Reglas de la guía

1. **Escribe tú el código.** Usa a Claude como tutor: pide pistas, explicaciones o revisión de un intento tuyo. En la prueba técnica no vas a tener ayuda, y se nota en cinco minutos.
2. **Adelántate al video.** Antes de que Fernando escriba algo, pausa e intenta hacerlo tú. Después compara.
3. **Rehaz sin mirar.** Al terminar cada app del curso, haz una versión pequeña desde cero sin ver el video. Eso es exactamente lo que mide la prueba.
4. **Explica en voz alta.** Si no puedes explicar algo en un minuto, todavía no lo sabes.
5. **Commits pequeños y frecuentes.** Tu historial en GitHub también lo miran.

## Estructura

```text
guia-react/
├── README.md                 esta guía
├── PROGRESO.md               tu bitácora semanal
├── package.json              Vitest y TypeScript para los ejercicios (npm install)
└── semana-01-fundamentos/
    ├── README.md             lección, reto y preguntas
    ├── datos.ts              tipos y productos de ejemplo
    ├── ejercicios.ts         los 20 ejercicios que resuelves
    ├── ejercicios.test.ts    las pruebas (no las modifiques)
    ├── curso/                lo que escribes siguiendo los videos
    └── carrito/              el reto, creado por ti con Vite
```
