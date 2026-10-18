# Semana 1 · JavaScript, TypeScript, HTML y CSS

**Fechas:** 19 al 25 de octubre de 2026 · **Tiempo:** 26,5 h de programación y 2,5 h de inglés · **Curso:** secciones 1 a 4 (5 h de video)

React es JavaScript. Casi todos los errores de quien empieza con React son en realidad de JavaScript: mutar un arreglo, olvidar un `await`, comparar objetos con `===`. Por eso esta semana tiene poco video y mucha práctica: JavaScript y TypeScript, el HTML y el CSS que el curso da por sabidos, y tu primera app de React, maquetada por ti.

Vienes de Python, así que la lógica ya la tienes. Lo nuevo es la sintaxis y unas cuantas trampas.

## Paso 0 · Instalar Node y preparar el repositorio

Abre PowerShell y ejecuta:

```powershell
winget install OpenJS.NodeJS.LTS
```

Cierra la terminal y abre una nueva. Verifica que quedó instalado (debe decir v24 o más):

```powershell
node -v
npm -v
```

Instala las herramientas de los ejercicios y corre las pruebas:

```powershell
cd $HOME\Documents\Programacion\guia-react
npm install
npm test -- semana-01
```

Debe decir `Tests 61 failed (61)`, con mensajes como `Ejercicio 1 sin resolver`: son 20 ejercicios con varias pruebas cada uno. Eso significa que todo está bien instalado.

En VS Code, abre la carpeta (`code .`) y acepta instalar las extensiones recomendadas. La más útil al principio es **Error Lens**: muestra los errores de TypeScript en la misma línea donde ocurren.

**Sube el repositorio a GitHub.** Crea un repositorio vacío llamado `guia-react` (sin README ni .gitignore, ya los tienes) y conéctalo. El primer commit ya está hecho:

```powershell
git remote add origin https://github.com/TU_USUARIO/guia-react.git
git push -u origin main
```

## Cómo trabajar

De lunes a viernes son 4,5 h de programación y 30 min de inglés (ver más abajo).

| Día | Programación |
|---|---|
| Lunes | Paso 0. Lección, temas 1 a 6. Curso: secciones 1 y 2, y el primer tercio de la 3 |
| Martes | Curso: resto de la sección 3. Lección, temas 7 a 11. Ejercicios 1 a 7 |
| Miércoles | Ejercicios 8 a 20 |
| Jueves | Repaso en javascript.info de lo que más te costó (1,5 h). Lección, tema 12 (HTML). Curso: sección 4, Primeros pasos en React |
| Viernes | Lección, temas 13 y 14 (CSS y flexbox). Flexbox Froggy. Empezar el carrito: la parte de React |
| Sábado (4 h) | Terminar el carrito con su diseño, preguntas de entrevista, ruta de empleo, commit y push |
| Domingo | Descanso |

Lo que escribas siguiendo los videos va en la carpeta `curso/` de esta semana. Los ejercicios y el reto van aparte.

Para resolver los ejercicios, abre `ejercicios.ts` y deja las pruebas vigilando en una terminal. Se vuelven a correr solas cada vez que guardas:

```powershell
npm run test:watch -- semana-01
```

Para correr un solo ejercicio: `npm test -- semana-01 -t ej07`. Lee el error con calma: dice qué esperaba la prueba (`Expected`) y qué devolvió tu función (`Received`). Las pruebas están en `ejercicios.test.ts`. Léelas, porque muestran exactamente qué se espera de cada función.

Al final, revisa los tipos con `npm run tipos`.

**Diagnóstico:** si resuelves los ejercicios 1 a 10 en menos de hora y media sin buscar nada, ya tienes la base de JavaScript: ve el resto de la sección 3 a 1,5x y usa el repaso del jueves para empezar la sección 5 del curso. Si te trabas en más de 5, alarga el repaso del jueves con los capítulos de javascript.info que salen en Recursos. Todo el curso se apoya en esto.

## La lección

### 1. Variables

```ts
const nombre = 'Ana';   // no se puede reasignar: úsala por defecto
let intentos = 0;       // solo cuando vas a reasignar
intentos += 1;
```

No uses `var`: es de antes de 2015 y tiene reglas de alcance confusas. Ojo: `const` no congela el contenido. `const lista = []; lista.push(1)` funciona. Lo que no puedes hacer es `lista = otraLista`.

### 2. De Python a JavaScript

| Python | JavaScript |
|---|---|
| `True`, `False`, `None` | `true`, `false`, `null` (y también `undefined`) |
| `and`, `or`, `not` | `&&`, `\|\|`, `!` |
| `==` | `===` (nunca `==`) |
| `f"Hola {nombre}"` | `` `Hola ${nombre}` `` |
| `len(lista)` | `lista.length` |
| `lista.append(x)` | `lista.push(x)` |
| `x in lista` | `lista.includes(x)` |
| `for x in lista:` | `for (const x of lista) { }` |
| `[f(x) for x in xs if c(x)]` | `xs.filter(c).map(f)` |
| `print(x)` | `console.log(x)` |
| `raise ValueError("...")` | `throw new Error('...')` |
| `try` / `except` | `try` / `catch` |

**Trampas de quien viene de Python:**

- `[]` y `{}` son **verdaderos** en JavaScript (en Python son falsos). Para saber si una lista está vacía usa `lista.length === 0`.
- `===` compara objetos y arreglos por referencia: `{ a: 1 } === { a: 1 }` es `false`. Esto es central en React.
- `sort()` ordena como texto y además modifica el original: `[10, 9, 1].sort()` da `[1, 10, 9]`. Usa `toSorted((a, b) => a - b)`.
- Leer una propiedad que no existe no lanza error: devuelve `undefined`.

### 3. Funciones

```ts
function sumar(a: number, b: number): number {
  return a + b;
}

const sumar2 = (a: number, b: number) => a + b;          // flecha: sin llaves, el return es implícito
const saludar = (nombre = 'mundo') => `Hola, ${nombre}`;  // parámetro por defecto
```

En React vas a escribir casi todo con funciones flecha: componentes, manejadores de eventos y callbacks de `map`.

### 4. Arreglos: map, filter, find y reduce

```ts
const precios = [32000, 6500, 189000];

precios.map((p) => p * 2);                   // arreglo nuevo, transformado
precios.filter((p) => p > 10000);            // arreglo nuevo con los que cumplen
precios.find((p) => p > 10000);              // el primero que cumple, o undefined
precios.some((p) => p > 100000);             // ¿alguno cumple? true o false
precios.reduce((total, p) => total + p, 0);  // un solo valor; pon siempre el valor inicial
```

Ninguno modifica el original. `map` es lo que vas a usar en JSX para pintar listas.

### 5. Desestructuración y spread

```ts
const producto = { id: 1, nombre: 'Café', precio: 32000, stock: 12 };

const { nombre, precio } = producto;      // sacar propiedades
const { stock = 0 } = producto;           // valor por defecto, por si viene undefined
const [primero, ...resto] = [1, 2, 3];    // primero = 1, resto = [2, 3]

const copia = { ...producto, stock: 11 }; // copia con un campo cambiado
const lista2 = [...lista, nuevo];         // copia con un elemento más
```

El spread hace una copia superficial: los objetos de adentro siguen siendo los mismos.

### 6. Inmutabilidad: la regla de oro de React

React decide si vuelve a pintar un componente comparando referencias con `===`. Si modificas un objeto o un arreglo en vez de crear uno nuevo, React no se entera del cambio.

```ts
// Mal: modifica el original
carrito.push(item);
item.cantidad++;

// Bien: crea uno nuevo
const conItem = [...carrito, item];
const actualizado = carrito.map((i) => (i.id === id ? { ...i, cantidad: i.cantidad + 1 } : i));
const sinItem = carrito.filter((i) => i.id !== id);
```

Los ejercicios 11 a 15 son exactamente esto, y las pruebas revisan que no modifiques nada.

### 7. Módulos

```ts
// tienda.ts
export const IVA = 0.19;                 // exportación con nombre
export default function App() { }        // exportación por defecto (una por archivo)

// otro archivo
import App, { IVA } from './tienda';
import type { Producto } from './datos';  // importar solo un tipo
```

### 8. TypeScript en cinco minutos

Se parece a las anotaciones de tipo de Python, con una diferencia: aquí el editor y `tsc` sí las revisan y te marcan el error antes de ejecutar.

```ts
type Categoria = 'despensa' | 'tecnologia' | 'papeleria';  // solo esos tres textos

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: Categoria;
  descripcion?: string;  // opcional
}

const porId: Record<number, Producto> = {};  // como dict[int, Producto]

function primero<T>(items: T[]): T | undefined {  // genérico: sirve para cualquier tipo
  return items[0];
}
```

`type` e `interface` sirven casi para lo mismo. Fernando usa `interface` para los objetos y las props de los componentes.

### 9. Asincronía: promesas, async/await y fetch

```ts
async function obtenerUsuario(id: number) {
  const respuesta = await fetch(`https://api.ejemplo.com/usuarios/${id}`);
  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status}`);  // fetch NO lanza error con un 404: tienes que revisarlo tú
  }
  return await respuesta.json();
}

// Varias a la vez, no una tras otra:
const [ana, luis] = await Promise.all([obtenerUsuario(1), obtenerUsuario(2)]);
```

Una función `async` siempre devuelve una promesa. Para usar el resultado necesitas `await` (o `.then()`). En los ejercicios 17 y 18 vas a usar la [API de Rick and Morty](https://rickandmortyapi.com). Las pruebas la simulan, así que no necesitas internet, pero puedes abrir [un personaje](https://rickandmortyapi.com/api/character/1) en el navegador para ver qué devuelve.

### 10. Closures

Una función recuerda las variables del lugar donde se creó, aunque ese lugar ya haya terminado de ejecutarse:

```ts
function crearSaludador(saludo: string) {
  return (nombre: string) => `${saludo}, ${nombre}`;
}

const hola = crearSaludador('Hola');
hola('Ana');  // 'Hola, Ana'
```

Los hooks de React se apoyan en esto todo el tiempo. Y `debounce` (ejercicio 20) es una pregunta clásica en entrevistas de frontend.

### 11. Pruebas con Vitest

```ts
import { describe, expect, it } from 'vitest';

describe('sumar', () => {
  it('suma dos números', () => {
    expect(sumar(2, 3)).toBe(5);
  });
});
```

`toBe` compara con `===` y sirve para números y textos. `toEqual` compara el contenido y es la que usas con objetos y arreglos. En la semana 2 el curso entra de lleno en pruebas.

### 12. HTML lo justo para JSX

JSX es HTML escrito dentro de JavaScript. Estas son las etiquetas que más vas a usar:

```tsx
<main>                                       {/* el contenido principal de la página */}
  <header>
    <img src="/logo.svg" alt="Logo de la tienda" />  {/* img siempre lleva alt */}
    <h1>Tienda</h1>                          {/* un solo h1 por página; después h2, h3... */}
  </header>

  <section>
    <h2>Productos</h2>
    <ul>                                     {/* una lista: cada producto es un li */}
      <li>
        <article className="tarjeta">        {/* en JSX, class se escribe className */}
          <h3>{producto.nombre}</h3>         {/* entre llaves va JavaScript */}
          <p>$ 32.000</p>
          <button onClick={agregar} disabled={producto.stock === 0}>Agregar</button>
        </article>
      </li>
    </ul>
  </section>
</main>
```

- **Usa etiquetas que digan qué es cada cosa** (`header`, `main`, `section`, `article`, `button`) en vez de poner `div` en todo. Se llama HTML semántico: lo usan los lectores de pantalla, y los evaluadores de una prueba técnica lo notan.
- **Lo que se hace clic es un `button`**, no un `div` con `onClick`.
- **Diferencias con el HTML normal:** `className` en vez de `class`, `htmlFor` en vez de `for`, eventos en camelCase (`onClick`, `onChange`) y todas las etiquetas se cierran, también `<img />` y `<input />`.

### 13. CSS: reglas y modelo de caja

En una app de Vite, el CSS va en un archivo que importas desde el componente: `import './App.css'`. Una regla tiene un selector y declaraciones:

```css
.aviso {                      /* selector de clase: aplica a className="aviso" */
  padding: 16px;              /* espacio entre el borde y el contenido */
  border: 1px solid #d0d5dd;  /* el borde */
  margin-bottom: 12px;        /* espacio por fuera del borde */
  border-radius: 8px;
  color: #b42318;
}

.aviso strong {               /* los strong que están dentro de un .aviso */
  font-size: 1.1rem;          /* rem: relativo a la letra base, que suele ser 16 px */
}
```

Todo elemento es una caja con cuatro capas, de adentro hacia afuera: contenido, `padding`, `border` y `margin`. Pon esto al inicio de tu CSS para que el ancho que declares incluya el padding y el borde. Casi todos los proyectos lo hacen:

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

Da estilo con clases, no con ids ni con etiquetas sueltas: las clases se reutilizan y se leen mejor. En el navegador, clic derecho y **Inspeccionar** te muestra la caja de cualquier elemento con sus medidas. Úsalo cada vez que algo no quede donde esperas.

### 14. Flexbox

Flexbox acomoda elementos en una fila o en una columna. Se activa en el contenedor y controla a sus hijos directos:

```css
.barra {                          /* barra de navegación: logo a un lado, menú al otro */
  display: flex;
  justify-content: space-between; /* reparte en la dirección de la fila */
  align-items: center;            /* alinea en la otra dirección */
}

.galeria {
  display: flex;
  flex-wrap: wrap;                /* si no caben, bajan a la siguiente línea */
  gap: 16px;                      /* espacio entre hijos: mejor que margin */
}

.galeria > * {
  flex: 1 1 200px;                /* crece, se encoge y parte de 200 px de ancho */
}

.perfil {
  display: flex;
  flex-direction: column;         /* ahora los hijos van en columna */
  gap: 8px;
}
```

`justify-content` reparte en la dirección principal (la fila, o la columna si cambiaste `flex-direction`) y `align-items` alinea en la otra. Con `flex-direction: column` los dos se intercambian, y esa es la confusión más común. Antes del reto, juega [Flexbox Froggy](https://flexboxfroggy.com/#es): son 24 niveles cortos y al final te sabes estas propiedades.

## El reto: carrito básico

Tu primera app de React, hecha y maquetada sin mirar el video. Créala dentro de esta carpeta:

```powershell
cd semana-01-fundamentos
npm create vite@latest carrito -- --template react-ts
cd carrito
npm install
npm run dev
```

Copia `datos.ts` a `carrito/src/datos.ts`, borra el CSS de ejemplo que trae Vite y construye esto:

1. Un componente `TarjetaProducto` que recibe un `Producto` por props (tipadas con `interface`) y muestra el nombre, el precio y el stock. Para el precio: `` `$ ${precio.toLocaleString('es-CO')}` `` da `$ 32.000`.
2. `App` pinta todas las tarjetas con `map` y una `key` correcta.
3. Cada tarjeta tiene un contador de cantidad con botones `−` y `+`, hecho con `useState`. No baja de 0 ni pasa del stock.
4. Si el stock es 0, la tarjeta dice "Agotado" y los botones quedan deshabilitados.
5. HTML semántico (tema 12): las tarjetas van en una lista (`ul` y `li`), cada una es un `article` y los botones son `button`.
6. Diseño con flexbox y CSS escrito por ti, sin librerías (temas 13 y 14):
   - Las tarjetas se acomodan varias por fila y bajan a la siguiente línea cuando no caben. Achica la ventana del navegador para comprobarlo.
   - En cada tarjeta, el contador queda abajo aunque los nombres tengan largos distintos. Pista: `margin-top: auto` en un hijo de un contenedor flex en columna.
7. La consola del navegador (F12) no muestra errores ni advertencias.

**Extra opcional:** un buscador arriba que filtre por nombre mientras escribes, usando tu `filtrarProductos`. O mostrar el total del carrito arriba de las tarjetas: para eso tienes que "subir el estado" a `App`, algo que vas a ver bien más adelante en el curso, pero vale la pena intentarlo.

## Preguntas de entrevista

Respóndelas en voz alta, en menos de un minuto cada una. Si no puedes, vuelve a la lección.

1. ¿Qué diferencia hay entre `let`, `const` y `var`?
2. ¿Por qué se usa `===` y no `==`?
3. ¿Qué diferencia hay entre `map` y `forEach`?
4. ¿Qué es un closure? Da un ejemplo.
5. ¿Qué devuelve una función `async`? ¿Qué pasa con `fetch` cuando el servidor responde 404?
6. ¿Por qué en React no se debe modificar el estado directamente?
7. ¿Qué es JSX y en qué se convierte?
8. ¿Qué diferencia hay entre props y estado?
9. ¿Qué es el modelo de caja? ¿Qué cambia `box-sizing: border-box`?
10. En flexbox, ¿qué diferencia hay entre `justify-content` y `align-items`?

## Inglés de esta semana

Treinta minutos de lunes a viernes:

- Instala [Anki](https://apps.ankiweb.net/) y crea un mazo llamado "Inglés técnico". Cada día agrega 5 palabras que te hayas encontrado en el código o en los errores (`array`, `request`, `expected`, `received`, `render`...) y repasa las que te toque.
- Empieza el curso gratuito de [BBC Learning English](https://www.bbc.co.uk/learningenglish/) en tu nivel, 20 minutos al día.

## Ruta de empleo

- **GitHub:** arregla tu perfil, con foto, nombre real y una línea de bio (por ejemplo, "Aprendiendo desarrollo web fullstack · React · Node · Colombia"). Sube `guia-react` y `guia-ia-datos`, y fija `guia-react`.
- **La prueba:** pregúntale a tu amigo cómo fue su prueba técnica y llena la tabla del README principal.

## Recursos

- [javascript.info en español](https://es.javascript.info), parte 1: capítulos 2 (fundamentos), 4 (objetos), 5 (tipos de datos y métodos de arreglos), 6 (closures y `setTimeout`) y 11 (promesas y async/await)
- [MDN: métodos de los arreglos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array), para consultar `map`, `filter`, `reduce` y compañía
- [react.dev en español: Inicio rápido](https://es.react.dev/learn), para complementar la sección 4
- [TypeScript en 5 minutos](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), en inglés
- [MDN: sintaxis básica de HTML](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
- [MDN: el modelo de caja](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Box_model) y [MDN: flexbox](https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Flexbox), si los temas 13 y 14 te quedan cortos

## Terminado si

- [ ] `node -v` muestra v24 o más y el repositorio está en GitHub
- [ ] `npm test -- semana-01` muestra **61 passed**
- [ ] `npm run tipos` no muestra errores
- [ ] El carrito cumple los 7 puntos del reto
- [ ] Respondiste las 10 preguntas de entrevista sin mirar
- [ ] Hiciste inglés al menos 4 de los 5 días
- [ ] Tu perfil de GitHub está listo y llenaste la tabla de la prueba
- [ ] Hiciste commit y push, y anotaste la semana en `PROGRESO.md`
