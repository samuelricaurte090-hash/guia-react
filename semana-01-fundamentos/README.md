# Semana 1 · Fundamentos de JavaScript, TypeScript y React

**Fechas:** 19 al 25 de octubre de 2026 · **Tiempo:** 14 horas · **Curso:** secciones 1 a 4 (5 h de video)

React es JavaScript. Casi todos los errores de quien empieza con React son en realidad de JavaScript: mutar un arreglo, olvidar un `await`, comparar objetos con `===`. Por eso esta semana tiene poco video y mucha práctica de JS y TypeScript, y termina con tu primera app de React.

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

| Día | Tiempo | Qué hacer |
|---|---|---|
| Lunes | 2 h | Paso 0, lección (temas 1 a 6) y curso: secciones 1 y 2 |
| Martes | 2 h | Curso: sección 3, primera mitad. Ejercicios 1 a 5 |
| Miércoles | 2 h | Curso: sección 3, segunda mitad. Lección (temas 7 a 11). Ejercicios 6 a 10 |
| Jueves | 2 h | Ejercicios 11 a 20 |
| Viernes | 2 h | Curso: sección 4, Primeros pasos en React |
| Sábado | 4 h | Reto del carrito, preguntas de entrevista, commit y push |

Lo que escribas siguiendo los videos va en la carpeta `curso/` de esta semana. Los ejercicios y el reto van aparte.

Para resolver los ejercicios, abre `ejercicios.ts` y deja las pruebas vigilando en una terminal. Se vuelven a correr solas cada vez que guardas:

```powershell
npm run test:watch -- semana-01
```

Para correr un solo ejercicio: `npm test -- semana-01 -t ej07`. Lee el error con calma: dice qué esperaba la prueba (`Expected`) y qué devolvió tu función (`Received`). Las pruebas están en `ejercicios.test.ts`. Léelas, porque muestran exactamente qué se espera de cada función.

Al final, revisa los tipos con `npm run tipos`.

**Diagnóstico:** si resuelves los ejercicios 1 a 10 en menos de hora y media sin buscar nada, ya tienes la base de JavaScript: ve el resto de la sección 3 a 1,5x. Si te trabas en más de 5, no avances a la semana 2 sin repasar los capítulos de javascript.info que salen en Recursos. Todo el curso se apoya en esto.

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

## El reto: carrito básico

Tu primera app de React, hecha sin mirar el video. Créala dentro de esta carpeta:

```powershell
cd semana-01-fundamentos
npm create vite@latest carrito -- --template react-ts
cd carrito
npm install
npm run dev
```

Copia `datos.ts` a `carrito/src/datos.ts` y construye esto:

1. Un componente `TarjetaProducto` que recibe un `Producto` por props (tipadas con `interface`) y muestra el nombre, el precio y el stock. Para el precio: `` `$ ${precio.toLocaleString('es-CO')}` `` da `$ 32.000`.
2. `App` pinta todas las tarjetas con `map` y una `key` correcta.
3. Cada tarjeta tiene un contador de cantidad con botones `−` y `+`, hecho con `useState`. No baja de 0 ni pasa del stock.
4. Si el stock es 0, la tarjeta dice "Agotado" y los botones quedan deshabilitados.
5. La consola del navegador (F12) no muestra errores ni advertencias.

**Extra opcional:** un buscador arriba que filtre por nombre mientras escribes, usando tu `filtrarProductos`. O mostrar el total del carrito arriba de las tarjetas: para eso tienes que "subir el estado" a `App`, algo que vas a ver bien en la semana 3, pero vale la pena intentarlo.

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

## Preparación de la prueba

Pregúntale al reclutador cómo es la prueba técnica y llena la tabla "La prueba" del README principal: formato, duración, JavaScript o TypeScript, si incluye backend y si piden pruebas automáticas. Con eso se ajustan las semanas 5 y 6.

## Recursos

- [javascript.info en español](https://es.javascript.info), parte 1: capítulos 2 (fundamentos), 4 (objetos), 5 (tipos de datos y métodos de arreglos), 6 (closures y `setTimeout`) y 11 (promesas y async/await)
- [MDN: métodos de los arreglos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array), para consultar `map`, `filter`, `reduce` y compañía
- [react.dev en español: Inicio rápido](https://es.react.dev/learn), para complementar la sección 4
- [TypeScript en 5 minutos](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), en inglés

## Terminado si

- [ ] `node -v` muestra v24 o más y el repositorio está en GitHub
- [ ] `npm test -- semana-01` muestra **61 passed**
- [ ] `npm run tipos` no muestra errores
- [ ] El carrito cumple los 5 puntos del reto
- [ ] Respondiste las 8 preguntas de entrevista sin mirar
- [ ] Llenaste la tabla de la prueba en el README principal
- [ ] Hiciste commit y push, y anotaste la semana en `PROGRESO.md`
