# Semana 1 · JavaScript I: sintaxis, funciones, arreglos y objetos

**Fechas:** 19 al 27 de octubre de 2026 · **Tiempo:** 26,5 h de programación y 2,5 h de inglés · **Curso:** secciones 1, 2 y 3 hasta la clase "Importaciones y exportaciones"

React es JavaScript. Casi todos los errores de quien empieza con React son en realidad de JavaScript: mutar un arreglo, comparar objetos con `===`, olvidar que `sort()` cambia el original. Por eso esta semana es solo JavaScript, sin prisa: sintaxis, funciones, arreglos, objetos y un poco de TypeScript.

Vienes de Python, así que la lógica ya la tienes. Lo nuevo es la sintaxis y unas cuantas trampas.

La asincronía (promesas, `fetch`, `async/await`), los closures y los ejercicios 16 a 20 pasan a la semana 2. El HTML, el CSS y el carrito de React tienen sus propias semanas más adelante.

## Paso 0 · Instalar Node y preparar el repositorio

Ya lo hiciste: Node v24 instalado, `npm install` corrido y el repositorio en GitHub. Si cambias de computador, estos son los pasos:

```powershell
winget install OpenJS.NodeJS.LTS
cd $HOME\Documents\Programacion\guia-react
npm install
npm test -- semana-01
```

En VS Code, acepta las extensiones recomendadas del repositorio. La más útil al principio es **Error Lens**: muestra los errores de TypeScript en la misma línea donde ocurren.

## Cómo trabajar

### Lo que falta de la semana

| Día | Programación |
|---|---|
| Sábado 24 | Arreglar los ejercicios 1, 2, 5, 10, 11, 12 y 13 (ver la revisión en el chat) y hacer el 15 |
| Domingo 25 | Descanso |
| Lunes 26 | Curso: terminar la sección 3 hasta "Importaciones y exportaciones", con sus tareas. Lecturas de javascript.info (ver "Para ir a fondo") |
| Martes 27 | Apuntes, reto "Rehaz sin mirar" y preguntas de entrevista. Commit y push |

Lo que escribas siguiendo los videos va en la carpeta `curso/` de esta semana. Si creaste el proyecto de Reforzamiento en otra carpeta, pásalo a `curso/`: copia todo menos `node_modules` y corre `npm install` ahí.

### Curso, lección y ejercicios

Cada pieza tiene su papel: el curso te explica el tema por primera vez, la lección de abajo es el resumen con las trampas de quien viene de Python, y los ejercicios comprueban si lo entendiste sin video al lado. Por cada bloque de clases:

1. Ve el bloque y escribe el código con Fernando en `curso/`. Antes de que él escriba algo, pausa e intenta hacerlo tú.
2. Lee el tema de la lección que le corresponde.
3. Haz los ejercicios de ese tema enseguida, con el video cerrado.
4. Commit, solo si las pruebas de esos ejercicios están en verde.

| Clases de la sección 3 | Tema de la lección | Ejercicios |
|---|---|---|
| Variables y constantes · Template String | 1 y 2 | 1 y 2 |
| Objetos literales · Interfaces de TypeScript | 5 y 8 | Lee `datos.ts`: ahí están las interfaces de los ejercicios |
| Arreglos · Funciones · Funciones con múltiples retornos | 3 y 4 | 3 a 7 |
| Desestructuración de objetos y de arreglos, y su tarea | 5 | 9 y 11 |
| Interfaces y Enumeraciones | 8 | 8 (`Record`) y 10 (genérico `<T>`) |
| Importaciones y exportaciones, y su tarea | 7 | Mira la línea `import` de `ejercicios.ts` y de las pruebas |
| (no está en el curso) | 6 | 12 a 15 |

Detente en "Importaciones y exportaciones". Desde "Promesas" sigue la semana 2.

### Las pruebas

Abre `ejercicios.ts` y deja las pruebas de esta semana vigilando en una terminal. Se vuelven a correr solas cada vez que guardas:

```powershell
npm run test:watch -- semana-01 -t "ej0|ej1[0-5]"
```

El `-t "ej0|ej1[0-5]"` corre solo los ejercicios 1 a 15. Para correr uno solo: `npm test -- semana-01 -t ej07`. Lee el error con calma: dice qué esperaba la prueba (`Expected`) y qué devolvió tu función (`Received`). Las pruebas están en `ejercicios.test.ts`. Léelas, porque muestran exactamente qué se espera de cada función.

Al final, revisa los tipos con `npm run tipos`.

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
- Leer una propiedad que no existe no lanza error: devuelve `undefined`. Y `undefined` metido en una cuenta da `NaN`, que es lo que te pasó en el ejercicio 1.

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

`type` e `interface` sirven casi para lo mismo. Fernando usa `interface` para los objetos y las props de los componentes. La semana 5 va a fondo con TypeScript.

### 9. Pruebas con Vitest

```ts
import { describe, expect, it } from 'vitest';

describe('sumar', () => {
  it('suma dos números', () => {
    expect(sumar(2, 3)).toBe(5);
  });
});
```

`toBe` compara con `===` y sirve para números y textos. `toEqual` compara el contenido y es la que usas con objetos y arreglos. La semana 7 va a fondo con pruebas.

## Para ir a fondo

Lee estos capítulos de [javascript.info en español](https://es.javascript.info) después de terminar los ejercicios. Haz los ejercicios cortos que trae cada capítulo al final: son buenos y tienen solución para comparar.

| Capítulo | Qué leer | Por qué |
|---|---|---|
| 2. Fundamentos de JavaScript | Comparaciones, operadores lógicos, funciones, funciones flecha | Las trampas de `==` y de los valores "falsos" |
| 4. Objetos: lo básico | Objetos, copia de objetos y referencias | La base de la inmutabilidad (tema 6) |
| 5. Tipos de datos | Arreglos, métodos de arreglos, asignación desestructurante | Lo que más vas a usar en React |

Y **rompe las cosas a propósito**: en un ejercicio que ya pasa, cambia `toSorted` por `sort`, o quita el valor inicial del `reduce`, y mira qué prueba falla y por qué. Después déjalo como estaba.

## Apuntes

Crea `apuntes.md` en esta carpeta. Al cerrar cada tema, escribe un párrafo con tus palabras, como si se lo explicaras a alguien que sabe Python pero no JavaScript. Como mínimo:

- Qué diferencia hay entre `map`, `filter`, `find` y `reduce`, con un ejemplo tuyo de cada uno.
- Por qué `{ a: 1 } === { a: 1 }` da `false` y qué tiene que ver con React.
- Qué hace el spread y por qué la copia es "superficial".
- Cuándo usar `interface` y para qué sirve un genérico `<T>`.

Si un párrafo no te sale, ese es el tema que debes repasar.

## El reto: rehaz sin mirar

Cuando los 15 ejercicios estén en verde:

1. Haz commit.
2. Borra el cuerpo de los ejercicios 5, 7, 8, 9 y 12 (deja la firma y el comentario) y vuelve a escribirlos sin mirar nada, en menos de una hora.
3. Corre las pruebas. Si te bloqueas, `git diff` te muestra tu versión anterior; úsala solo para el ejercicio que te bloqueó, y anótalo en `PROGRESO.md` como tema para repasar.

## Preguntas de entrevista

Respóndelas en voz alta, en menos de un minuto cada una. Si no puedes, vuelve a la lección.

1. ¿Qué diferencia hay entre `let`, `const` y `var`?
2. ¿Por qué se usa `===` y no `==`?
3. ¿Qué diferencia hay entre `map` y `forEach`?
4. ¿Qué hace `reduce` y por qué conviene darle siempre un valor inicial?
5. ¿Qué diferencia hay entre `sort` y `toSorted`?
6. ¿Qué es la desestructuración? Da un ejemplo con objetos y otro con arreglos.
7. ¿Por qué en React no se debe modificar el estado directamente?
8. ¿Qué diferencia hay entre una exportación por defecto y una con nombre?

## Inglés de esta semana

Treinta minutos de lunes a viernes:

- Instala [Anki](https://apps.ankiweb.net/) y crea un mazo llamado "Inglés técnico". Cada día agrega 5 palabras que te hayas encontrado en el código o en los errores (`array`, `expected`, `received`, `default`, `return`...) y repasa las que te toque.
- Empieza el curso gratuito de [BBC Learning English](https://www.bbc.co.uk/learningenglish/) en tu nivel, 20 minutos al día.

## Ruta de empleo

- **GitHub:** arregla tu perfil, con foto, nombre real y una línea de bio (por ejemplo, "Aprendiendo desarrollo web fullstack · React · Node · Colombia"). Fija `guia-react`.
- **La prueba de tu amigo:** pregúntale cómo fue y llena la tabla del README principal.

## Recursos

- [javascript.info en español](https://es.javascript.info), capítulos 2, 4 y 5 de la parte 1
- [MDN: métodos de los arreglos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array), para consultar `map`, `filter`, `reduce` y compañía
- [TypeScript en 5 minutos](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), en inglés: buena primera práctica de lectura técnica

## Terminado si

- [ ] `npm test -- semana-01 -t "ej0|ej1[0-5]"` muestra **45 passed**
- [ ] `npm run tipos` no muestra errores
- [ ] Viste la sección 3 del curso hasta "Importaciones y exportaciones", con sus tareas, y el código está en `curso/`
- [ ] Leíste los capítulos de javascript.info e hiciste sus ejercicios
- [ ] `apuntes.md` tiene los cuatro párrafos
- [ ] Rehiciste sin mirar los ejercicios 5, 7, 8, 9 y 12
- [ ] Respondiste las 8 preguntas de entrevista sin mirar
- [ ] Hiciste inglés al menos 4 de los 5 días
- [ ] Hiciste commit y push, y anotaste la semana en `PROGRESO.md`
