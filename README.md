# Guía de estudio · Desarrollo web fullstack

**Meta:** aprender desarrollo web fullstack a fondo y conseguir el primer trabajo remoto. Stack: HTML, CSS, JavaScript y TypeScript como base; React en el frontend; Node, Express, MongoDB y PostgreSQL en el backend.

No hay fecha para postular. Postulas cuando cumplas los criterios de [Cuándo postular](#cuándo-postular), que según el plan sería hacia abril de 2027.

**Curso base:** [React: De cero a experto](https://www.udemy.com/course/react-cero-experto/), de Fernando Herrera. Es la versión renovada en enero de 2026: 30 secciones, 46 h de video, React 19 con TypeScript, Tailwind, shadcn, TanStack Query, Zustand, React Router 7, Vitest y un bloque MERN (Mongo, Express, React y Node). El curso es una parte del plan, no todo: antes de React van tres semanas de fundamentos que el curso da por sabidos, y después vienen backend, SQL y un proyecto propio.

## Cómo se estudia a fondo

1. **Un tema central por semana.** Si una semana no alcanza, se alarga; no se apila con la siguiente.
2. **Velocidad normal.** Nada de videos a 1,5x. Si una clase no te quedó clara, la repites.
3. **Documentación oficial además del video.** Cada semana trae lecturas de [react.dev](https://es.react.dev/learn), [MDN](https://developer.mozilla.org/es/) o [javascript.info](https://es.javascript.info). El video te muestra cómo; la documentación te explica por qué.
4. **Explica con tus palabras.** Al cerrar cada tema, escribe un párrafo en el `apuntes.md` de la semana, como si se lo enseñaras a alguien. Si no te sale, todavía no lo entiendes.
5. **Rehaz sin mirar.** Cada semana termina con algo que construyes sin video ni IA.
6. **Rompe las cosas a propósito.** Cuando algo funcione, cámbialo para ver qué error sale. Así aprendes a leer errores, que es la mitad del trabajo.

## Cómo funciona esta guía

Cada semana tiene su carpeta con tres cosas:

1. **Lección** (`README.md`): qué clases del curso ver, qué leer, lo que necesitas saber y por qué importa en un trabajo.
2. **Práctica**: ejercicios con pruebas automáticas (`npm test -- semana-01`) y un reto que haces sin ayuda, con criterios claros de "terminado".
3. **Ruta de empleo e inglés**: tareas pequeñas para que GitHub, LinkedIn, CV e inglés vayan avanzando sin esperar al final.

Las semanas se preparan una a la vez, según cómo te fue en la anterior. Cuando termines una, abre esta carpeta en Claude Code y escribe:

> Revisa mi semana 1 y prepara la semana 2.

### Rutina semanal (unas 29 horas)

| Día | Tiempo | Qué hacer |
|---|---|---|
| Lunes a viernes | 5 h en la mañana | 4,5 h de programación y 30 min de inglés |
| Sábado | 4 h | Reto, apuntes, preguntas de entrevista, ruta de empleo, commit y push |
| Domingo | — | Descanso |

Por ejemplo, de 8:30 a 11:30 y de 12:30 a 14:30, para llegar al trabajo con energía. Las semanas van de miércoles a martes.

## Mapa de semanas

### Fase 1 · Fundamentos de la web

JavaScript (con lo mínimo de TypeScript que usa el curso), HTML y CSS. La semana 1 está en archivos `.ts` porque la sección de Reforzamiento del curso se enseña en TypeScript, pero lo que escribes dentro de las funciones es JavaScript; los tipos de las firmas ya vienen dados. El buscador de la semana 2 va en JavaScript puro, sin compilar, y en la semana 5 lo pasas a TypeScript.

| Semana | Fechas | Tema | Curso | Entregable hecho por ti | Estado |
|---|---|---|---|---|---|
| [S1](semana-01-fundamentos/) | 19 – 27 oct | JavaScript I: sintaxis, funciones, arreglos y objetos | 1 a 3, hasta "Importaciones y exportaciones" | Ejercicios 1 a 15, rehechos sin mirar | En curso |
| S2 | 28 oct – 3 nov | JavaScript II: asincronía, closures y el DOM | 3, desde "Promesas" | Ejercicios 16 a 20 y un buscador de personajes en JavaScript puro | Se prepara al terminar S1 |
| S3 | 4 – 10 nov | HTML semántico, formularios y accesibilidad. CSS I: cascada, especificidad y modelo de caja | — | Una página maquetada a partir de un diseño | |
| S4 | 11 – 17 nov | CSS II: flexbox, grid y diseño responsive | — | El buscador de S2, responsive | |
| S5 | 18 – 24 nov | TypeScript a fondo y Git en serio (ramas, conflictos, pull requests) | — | El buscador migrado a TypeScript, trabajado con ramas | |

### Fase 2 · React

| Semana | Fechas | Tema | Curso | Entregable hecho por ti |
|---|---|---|---|---|
| S6 | 25 nov – 1 dic | Cómo piensa React: componentes, props, estado y eventos | 4 | Carrito de compras maquetado con flexbox |
| S7 | 2 – 8 dic | Pruebas automáticas con Vitest y Testing Library | 5 | Pruebas del carrito |
| S8 | 9 – 15 dic | Primera app completa: GifExpertApp, custom hooks y despliegue | 6, 7 y 8 | GifExpertApp publicada y rehecha en pequeño sin mirar |
| S9 | 16 – 22 dic | Hooks a fondo: useEffect, useRef y useReducer | 9 y 10 | App de tareas con useReducer y localStorage |
| — | 23 dic – 5 ene | Receso de fin de año | — | — |
| S10 | 6 – 12 ene | Rendimiento y estado global: memorización y Context | 11 y 12 | La app de tareas con Context |
| S11 | 13 – 19 ene | Aplicaciones de varias páginas: React Router, TanStack Query y Tailwind | 13, 14 y 15 | HeroesApp |
| S12 | 20 – 26 ene | Pruebas de una SPA y despliegue | 16 y 17 | HeroesApp con pruebas y publicada |
| S13 | 27 ene – 2 feb | Panel administrativo y autenticación en el frontend | 18, 19 y 20 | Panel con login |
| S14 | 3 – 9 feb | Formularios y carga de archivos | 21, 22 y 23 | CRUD de productos y simulacro de frontend |

### Fase 3 · Backend

| Semana | Fechas | Tema | Curso | Entregable hecho por ti |
|---|---|---|---|---|
| S15 | 10 – 16 feb | Cómo funciona un servidor: HTTP y Node sin frameworks | — | Un servidor HTTP con Node puro |
| S16 | 17 – 23 feb | Express y diseño de APIs REST | 24 y 25 | API REST propia, hecha sin mirar el video |
| S17 | 24 feb – 2 mar | MongoDB, autenticación con JWT y seguridad básica | 26 y 27 | API con login, desplegada |
| S18 | 3 – 9 mar | MERN completo y pruebas de backend | 28, 29 y 30 | MERN Calendar publicado |
| S19 | 10 – 16 mar | SQL I: consultas, JOIN y diseño de tablas | — | Una base de datos diseñada y consultada a mano |
| S20 | 17 – 23 mar | SQL II: PostgreSQL desde Node | — | La API de S16 con PostgreSQL y un simulacro fullstack |

### Fase 4 · Proyecto y empleo

| Semana | Fechas | Tema | Entregable hecho por ti |
|---|---|---|---|
| S21 | 24 – 30 mar | Proyecto propio: diseño y backend | Base de datos, API y pruebas |
| S22 | 31 mar – 6 abr | Proyecto propio: frontend | Frontend conectado a tu API |
| S23 | 7 – 13 abr | Proyecto propio: despliegue y documentación | Proyecto publicado con README |
| S24 | 14 – 20 abr | Portafolio, CV y entrevistas | Portafolio publicado y primeras postulaciones |

Por qué este orden:

- **JavaScript, HTML y CSS antes que React.** React no reemplaza esas bases: las usa todo el tiempo. Quien salta directo a React se atasca en errores de JavaScript que cree que son de React.
- **HTTP y Node sin frameworks antes de Express.** Así entiendes qué hace Express por ti, en vez de memorizarlo.
- **SQL además de MongoDB.** El curso enseña el backend con MongoDB, pero en las vacantes junior SQL (PostgreSQL o MySQL) aparece mucho más. En la semana 10 lo compruebas con 20 vacantes reales.

## La prueba de tu amigo

No tiene fecha. Por lo que sabes, el cargo empieza siendo frontend con algunas tareas de backend:

- **Si es solo de frontend,** preséntala después de la semana 14, cuando hayas pasado el simulacro de frontend.
- **Si incluye backend,** preséntala después de la semana 18.

Pregúntale a tu amigo cómo fue su prueba y anótalo aquí:

| Dato | Respuesta |
|---|---|
| Empresa y cargo | |
| Formato | En vivo / para la casa |
| Duración | |
| JavaScript o TypeScript | |
| ¿Incluye backend? | |
| ¿Piden pruebas automáticas? | |
| Qué evalúan | |

## Cuándo postular

Postulas cuando cumplas los cuatro criterios:

1. Haces un simulacro de 3 horas sin video ni IA: una app con React y TypeScript, rutas, una API, estados de carga y error, pruebas y despliegue.
2. Tienes al menos 3 apps publicadas y tu proyecto propio, cada una con su README.
3. Respondes sin mirar las preguntas de entrevista de todas las semanas.
4. GitHub, LinkedIn y CV en orden.

Si después de la semana 14 cumples los criterios del frontend (el simulacro de frontend, GifExpertApp y HeroesApp publicadas), puedes empezar a postular a vacantes de frontend antes, mientras sigues con el backend.

**Cuándo renunciar:** cuando tengas una oferta firmada, no antes.

## El proyecto propio (S21 a S23)

Una app fullstack hecha de cero, sin curso: React, TypeScript y Tailwind en el frontend; Node, Express y PostgreSQL en el backend; login con JWT, pruebas y despliegue.

Idea: **una app de mantenimiento de máquinas**, con equipos, órdenes de trabajo y su historial, y usuarios con roles. Junta tu formación en Mecatrónica con el desarrollo web, y en una entrevista es mucho más fácil de contar que otra lista de tareas. Si se te ocurre otra con un problema real, también sirve.

## Ruta de empleo

| Cuándo | Tarea |
|---|---|
| S1 | Perfil de GitHub con foto, nombre y bio, y tus repositorios subidos |
| S6 | LinkedIn: foto, titular (por ejemplo, "Frontend Developer en formación · React · TypeScript") y sección "Acerca de" |
| S8 | Publicar en LinkedIn tu primera app, con el enlace y lo que aprendiste |
| S10 | Anotar 20 vacantes remotas junior en [empleo/vacantes.csv](empleo/) y ver qué piden de verdad |
| S11 | Unirte a una comunidad de desarrollo web en español y presentarte |
| S14 | Primera versión del CV de una página |
| S18 | Publicar en LinkedIn tu app fullstack |
| S24 | Portafolio publicado, CV final, ensayo de tu presentación en 3 minutos y primeras postulaciones |

## Inglés

Con inglés básico, tu primer trabajo remoto va a ser casi seguro en una empresa que trabaja en español: de Colombia, de Latinoamérica o de España. El inglés es lo que después abre las vacantes de empresas de afuera, que suelen pagar en dólares. Con un plan de seis meses, el inglés también tiene tiempo de crecer. Son 30 minutos de lunes a viernes:

- **10 minutos de vocabulario técnico** en [Anki](https://apps.ankiweb.net/), con las palabras que te encuentres en el código y la documentación.
- **20 minutos de un curso general gratuito**, como [BBC Learning English](https://www.bbc.co.uk/learningenglish/), hasta que leer documentación deje de costarte. Después, documentación y videos técnicos en inglés con subtítulos en inglés.

**Meta para abril:** leer documentación técnica en inglés sin traductor y presentar tu proyecto propio en inglés durante dos minutos.

## Reglas de la guía

1. **Escribe tú el código.** Usa a Claude como tutor: pide pistas, explicaciones o revisión de un intento tuyo. En una prueba técnica no vas a tener ayuda, y se nota en cinco minutos.
2. **Adelántate al video.** Antes de que Fernando escriba algo, pausa e intenta hacerlo tú. Después compara.
3. **Corre las pruebas antes de cada commit.** Un mensaje que dice "resuelto" tiene que estar en verde.
4. **Explica en voz alta.** Si no puedes explicar algo en un minuto, todavía no lo sabes.
5. **Commits pequeños y frecuentes.** Los reclutadores miran tu historial en GitHub.
6. **Descansa el domingo.** Es un plan largo, además de tu trabajo.

## Estructura

```text
guia-react/
├── README.md                 esta guía
├── PROGRESO.md               tu bitácora semanal
├── package.json              Vitest y TypeScript para los ejercicios (npm install)
├── empleo/                   vacantes, CV y notas de entrevistas
└── semana-01-fundamentos/
    ├── README.md             lección, reto, preguntas y ruta de empleo
    ├── apuntes.md            tus explicaciones, con tus palabras
    ├── datos.ts              tipos y productos de ejemplo
    ├── ejercicios.ts         los ejercicios que resuelves
    ├── ejercicios.test.ts    las pruebas (no las modifiques)
    └── curso/                lo que escribes siguiendo los videos
```
