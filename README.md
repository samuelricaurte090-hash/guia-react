# Guía de estudio · Desarrollo web fullstack

**Meta:** conseguir el primer trabajo remoto en desarrollo web y empezar a postular en diciembre de 2026. Stack: React y TypeScript en el frontend; Node, Express, MongoDB y PostgreSQL en el backend.

**Hitos:**

- **17 de noviembre:** frontend con React terminado: el curso hasta la sección 23 y tres apps publicadas.
- **1 de diciembre:** backend básico con Node, MongoDB y PostgreSQL. Si la prueba técnica llega antes, ya tienes completo el frontend, que es lo que más se evalúa en un cargo que empieza siendo frontend.
- **Desde el 2 de diciembre:** postulaciones todas las semanas.
- **15 de diciembre:** proyecto fullstack propio publicado.

**Curso base:** [React: De cero a experto](https://www.udemy.com/course/react-cero-experto/), de Fernando Herrera. Es la versión renovada en enero de 2026: 30 secciones, 46 h de video, React 19 con TypeScript, Tailwind, shadcn, TanStack Query, Zustand, React Router 7, Vitest y un bloque MERN (Mongo, Express, React y Node).

## La prueba técnica

Por tu amigo sabes que entró como frontend y que a veces le tocan tareas de backend. Pregúntale cómo fue su prueba y llena esta tabla en la semana 1:

| Dato | Respuesta |
|---|---|
| Empresa y cargo | |
| Fecha aproximada | |
| Formato | En vivo / para la casa |
| Duración | |
| JavaScript o TypeScript | |
| ¿Incluye backend? | |
| ¿Piden pruebas automáticas? | |
| Qué evalúan | |

## Cómo funciona esta guía

Cada semana tiene su carpeta con tres cosas:

1. **Lección** (`README.md`): qué secciones del curso ver, lo que necesitas saber y por qué importa en un trabajo.
2. **Práctica**: ejercicios con pruebas automáticas (`npm test -- semana-01`) y un reto que haces sin ayuda, con criterios claros de "terminado".
3. **Ruta de empleo**: una tarea pequeña para que en diciembre tengas GitHub, LinkedIn, CV y portafolio listos.

Las semanas se preparan una a la vez, según cómo te fue en la anterior. Cuando termines una, abre esta carpeta en Claude Code y escribe:

> Revisa mi semana 1 y prepara la semana 2.

### Rutina semanal (unas 29 horas)

| Día | Tiempo | Qué hacer |
|---|---|---|
| Lunes a viernes | 5 h en la mañana | 4,5 h de programación y 30 min de inglés |
| Sábado | 4 h | Reto, preguntas de entrevista, ruta de empleo, commit y push |
| Domingo | — | Descanso |

Por ejemplo, de 8:30 a 11:30 y de 12:30 a 14:30, para llegar al trabajo con energía. Si un día no da, recorta ese día y sigue al siguiente; no lo pases al domingo.

## Mapa de semanas

| Semana | Fechas | Qué | Entregable hecho por ti | Estado |
|---|---|---|---|---|
| [S1](semana-01-fundamentos/) | 19 – 27 oct | Curso 1–4 · JavaScript y TypeScript · HTML, CSS y flexbox | 20 ejercicios y carrito maquetado con flexbox | Lista |
| S2 | 28 oct – 3 nov | Curso 5–10 · testing, GifExpertApp, hooks, useReducer · grid y responsive | GifExpertApp publicada, que se ve bien en el celular | Se prepara al terminar S1 |
| S3 | 4 – 10 nov | Curso 11–17 · memorización, Context, HeroesApp · Tailwind | HeroesApp publicada | |
| S4 | 11 – 17 nov | Curso 18–23 · panel admin, auth, formularios · Git en equipo | Panel con login y CRUD, y primer simulacro de frontend | |
| S5 | 18 – 24 nov | Curso 24–27 · HTTP, REST, Node, Express y MongoDB | API REST propia, hecha sin mirar el video | |
| S6 | 25 nov – 1 dic | Curso 28–30 · SQL y PostgreSQL | MERN Calendar publicado y simulacro fullstack | |
| S7 | 2 – 8 dic | Proyecto propio, parte 1 | Backend con PostgreSQL, login y pruebas | |
| S8 | 9 – 15 dic | Proyecto propio, parte 2 | Frontend publicado y conectado | |
| S9 | 16 – 22 dic | Portafolio y entrevistas | Página de portafolio y presentación de 3 minutos | |
| S10 | 23 – 31 dic | Postulaciones y repaso | Simulacros de entrevista. Libres: 24, 25 y 31 | |

Desde la semana 2, cada semana va de miércoles a martes: la semana 1 se alargó dos días. Si te atrasas, corre el calendario antes que saltarte un reto: los retos son lo más parecido a una prueba técnica. Lo único que se puede recortar sin mucho costo es la sección 22 del curso (carga de archivos).

## Las pistas

### HTML y CSS

El curso da por sabido HTML y CSS, y en una prueba también cuenta que la app se vea ordenada y funcione en el celular. Por eso va un tema cada semana, pegado al reto:

| Semana | Tema |
|---|---|
| S1 | HTML semántico, modelo de caja y flexbox |
| S2 | Grid y diseño responsive |
| S3 | Tailwind, que el curso usa desde la HeroesApp |
| S4 | Formularios accesibles |

El orden importa. Tailwind son clases de CSS con otro nombre: si ya sabes flexbox y grid, se aprende en una tarde; si no, terminas copiando clases sin entenderlas.

### Backend

El curso enseña el backend con MongoDB. En las vacantes junior, SQL (PostgreSQL o MySQL) aparece mucho más, así que la semana 6 agrega PostgreSQL y tu proyecto propio lo usa. En la semana 3 lo compruebas con tus propias 20 vacantes.

### Inglés

Con inglés básico, tu primer trabajo remoto va a ser casi seguro en una empresa que trabaja en español: de Colombia, de Latinoamérica o de España. El inglés es lo que después abre las vacantes de empresas de afuera, que suelen pagar en dólares. Por eso arranca desde ya, 30 minutos de lunes a viernes:

- **10 minutos de vocabulario técnico** en [Anki](https://apps.ankiweb.net/), con las palabras que te encuentres en el código y la documentación.
- **20 minutos de un curso general gratuito**, como [BBC Learning English](https://www.bbc.co.uk/learningenglish/), hasta que leer documentación deje de costarte. Después, documentación y videos técnicos en inglés con subtítulos en inglés.

**Meta para diciembre:** leer la documentación de React en inglés sin traductor y presentar tu proyecto en inglés durante un minuto, aunque sea con guion.

## El proyecto propio (S7 y S8)

Una app fullstack hecha de cero, sin curso: React, TypeScript y Tailwind en el frontend; Node, Express y PostgreSQL en el backend; login con JWT, pruebas y despliegue.

Idea: **una app de mantenimiento de máquinas**, con equipos, órdenes de trabajo y su historial, y usuarios con roles. Junta tu formación en Mecatrónica con el desarrollo web, y en una entrevista es mucho más fácil de contar que otra lista de tareas. Si se te ocurre otra con un problema real, también sirve.

## Ruta de empleo

| Semana | Tarea |
|---|---|
| S1 | Perfil de GitHub con foto, nombre y bio, y tus dos repositorios subidos. Preguntarle a tu amigo por la prueba |
| S2 | LinkedIn: foto, titular (por ejemplo, "Frontend Developer · React · TypeScript") y sección "Acerca de" |
| S3 | Anotar 20 vacantes remotas junior en [empleo/vacantes.csv](empleo/): stack, inglés y salario |
| S4 | Primera versión del CV de una página, con GifExpertApp y HeroesApp |
| S5 | Unirte a una comunidad de desarrollo web en español y presentarte |
| S6 | Publicar en LinkedIn una de tus apps, con el enlace y lo que aprendiste |
| S7 | Primeras 5 postulaciones |
| S8 | 5 postulaciones más y el CV actualizado con el proyecto propio |
| S9 | Portafolio publicado, 10 postulaciones y ensayo de tu presentación en 3 minutos |
| S10 | 10 postulaciones y 2 simulacros de entrevista |

**Cuándo renunciar:** cuando tengas una oferta firmada, no antes.

## Reglas de la guía

1. **Escribe tú el código.** Usa a Claude como tutor: pide pistas, explicaciones o revisión de un intento tuyo. En una prueba técnica no vas a tener ayuda, y se nota en cinco minutos.
2. **Adelántate al video.** Antes de que Fernando escriba algo, pausa e intenta hacerlo tú. Después compara.
3. **Rehaz sin mirar.** Al terminar cada app del curso, haz una versión pequeña desde cero sin ver el video. Eso es exactamente lo que mide una prueba.
4. **Explica en voz alta.** Si no puedes explicar algo en un minuto, todavía no lo sabes.
5. **Commits pequeños y frecuentes.** Los reclutadores miran tu historial en GitHub.
6. **Descansa el domingo.** Son diez semanas seguidas además de tu trabajo.

## Estructura

```text
guia-react/
├── README.md                 esta guía
├── PROGRESO.md               tu bitácora semanal
├── package.json              Vitest y TypeScript para los ejercicios (npm install)
├── empleo/                   vacantes, CV y notas de entrevistas
└── semana-01-fundamentos/
    ├── README.md             lección, reto, preguntas y ruta de empleo
    ├── datos.ts              tipos y productos de ejemplo
    ├── ejercicios.ts         los 20 ejercicios que resuelves
    ├── ejercicios.test.ts    las pruebas (no las modifiques)
    ├── curso/                lo que escribes siguiendo los videos
    └── carrito/              el reto, creado por ti con Vite
```
