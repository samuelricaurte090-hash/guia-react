# Guía de estudio · React para la prueba técnica

**Meta:** llegar a la prueba técnica de React, a finales de noviembre de 2026, siendo capaz de construir solo (sin video ni IA) una app con React, TypeScript, rutas, consumo de una API y pruebas automáticas.

**Curso base:** [React: De cero a experto](https://www.udemy.com/course/react-cero-experto/), de Fernando Herrera. Es la versión renovada en enero de 2026: 30 secciones, 46 h de video, React 19 con TypeScript, Tailwind, shadcn, TanStack Query, Zustand, React Router 7 y Vitest.

> Mientras tanto, la guía de IA y datos (`guia-ia-datos`) queda en pausa del 19 de octubre al 29 de noviembre. Se retoma después de la prueba.

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
2. **Práctica**: ejercicios con pruebas automáticas (`npm test -- semana-01`) y un reto que haces solo, con criterios claros de "terminado".
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

| Semana | Fechas | Secciones del curso | Video | Entregable hecho por ti | Estado |
|---|---|---|---|---|---|
| [S1](semana-01-fundamentos/) | 19 – 25 oct | 1–4: intro, refuerzo JS/TS, primeros pasos | 5 h | 20 ejercicios de JS/TS y carrito básico | Lista |
| S2 | 26 oct – 1 nov | 5–8: testing, GifExpertApp, despliegue | 7 h | GifExpertApp publicada y 5 pruebas tuyas | Se prepara al terminar S1 |
| S3 | 2 – 8 nov | 9–12: hooks, useReducer, memorización, Context | 7 h | App de tareas con useReducer, Context y localStorage | |
| S4 | 9 – 15 nov | 13–17: HeroesApp, caché, búsquedas, testing | 10 h | HeroesApp con rutas y búsqueda por query string | |
| S5 | 16 – 22 nov | 18–23: panel admin, auth, formularios, archivos | 8 h | Panel con login y CRUD de productos | |
| S6 | 23 – 29 nov | 24–30 (MERN) o simulacros | 9 h | Según el tipo de prueba | |

**Semana 6:** si la prueba incluye backend, haces las secciones MERN (Node, Express y Mongo). Si es solo frontend, te las saltas y haces 3 simulacros cronometrados. En los dos casos, el último simulacro va en los días antes de la prueba.

**Si te atrasas, recorta en este orden:**

1. Las secciones de testing (5, 8 y 16, unas 8 h) a 1,5x, escribiendo pocas pruebas propias. Si la prueba no pide tests, son lo primero que sale.
2. Carga de archivos (sección 22).
3. El bloque MERN, si la prueba es solo frontend.

Nunca recortes los retos: son lo más parecido a la prueba.

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
