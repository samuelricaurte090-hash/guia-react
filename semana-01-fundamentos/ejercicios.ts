/**
 * Semana 1 · Fundamentos de JavaScript y TypeScript.
 *
 * Completa cada función en orden. Borra la línea `throw new Error(...)`
 * y escribe tu solución. Deja las pruebas vigilando mientras trabajas:
 *
 *     npm run test:watch -- semana-01
 *
 * Para correr un solo ejercicio: npm test -- semana-01 -t ej07
 *
 * Regla: no pidas la solución completa a una IA. Pide pistas o una revisión
 * cuando ya tengas un intento. En la prueba técnica estarás solo.
 */

import type { Categoria, ItemCarrito, Personaje, PersonajeApi, Producto } from './datos';

// ---------------------------------------------------------------------------
// Nivel 1 · Lo básico
// ---------------------------------------------------------------------------

/**
 * Ejercicio 1. Devuelve el precio con IVA, redondeado al peso más cercano.
 * Si no te dicen el IVA, usa el 19 %.
 *
 *     precioConIva(10000)        // 11900
 *     precioConIva(10000, 0.05)  // 10500
 *
 * Pista: parámetro por defecto y Math.round().
 */
export function precioConIva(precio: number, iva = 0.19): number {
  throw new Error('Ejercicio 1 sin resolver');
}

/**
 * Ejercicio 2. Saluda según la hora del día (de 0 a 23).
 *
 *     saludo('Ana', 8)   // 'Buenos días, Ana'     (de 0 a 11)
 *     saludo('Ana', 15)  // 'Buenas tardes, Ana'   (de 12 a 18)
 *     saludo('Ana', 21)  // 'Buenas noches, Ana'   (de 19 a 23)
 *
 * Pista: template literals (`...${nombre}`).
 */
export function saludo(nombre: string, hora: number): string {
  throw new Error('Ejercicio 2 sin resolver');
}

/**
 * Ejercicio 3. Devuelve las iniciales en mayúscula de un nombre escrito a mano.
 *
 *     iniciales('samuel ricaurte')        // 'SR'
 *     iniciales('  ana   maría  pérez ')  // 'AMP'
 *
 * Pista: trim(), split(), filter(), map() y join(). Ojo: split(' ') deja
 * textos vacíos cuando hay varios espacios seguidos.
 */
export function iniciales(nombreCompleto: string): string {
  throw new Error('Ejercicio 3 sin resolver');
}

/**
 * Ejercicio 4. Suma solo los números pares. El 0 es par.
 *
 *     sumarPares([1, 2, 3, 4])  // 6
 *     sumarPares([])            // 0
 *
 * Pista: filter() y reduce(). ¿Qué hace reduce() con una lista vacía si no
 * le das valor inicial?
 */
export function sumarPares(numeros: number[]): number {
  throw new Error('Ejercicio 4 sin resolver');
}

// ---------------------------------------------------------------------------
// Nivel 2 · Arreglos de objetos: lo que vas a hacer en cada componente
// ---------------------------------------------------------------------------

/**
 * Ejercicio 5. Devuelve los nombres de los productos que tienen stock,
 * en el mismo orden.
 *
 *     nombresDisponibles(productos)  // ['Café de Huila 500 g', 'Audífonos inalámbricos', ...]
 */
export function nombresDisponibles(productos: Producto[]): string[] {
  throw new Error('Ejercicio 5 sin resolver');
}

/**
 * Ejercicio 6. Busca un producto por su id. Si no existe, devuelve undefined.
 *
 *     buscarPorId(productos, 4)?.nombre  // 'Teclado mecánico'
 *     buscarPorId(productos, 99)         // undefined
 */
export function buscarPorId(productos: Producto[], id: number): Producto | undefined {
  throw new Error('Ejercicio 6 sin resolver');
}

/**
 * Ejercicio 7. Ordena los productos por precio, de menor a mayor ('asc') o de
 * mayor a menor ('desc'). Por defecto, 'asc'.
 *
 * No modifiques el arreglo original: devuelve uno nuevo.
 *
 * Pista: toSorted() o [...productos].sort(). El comparador recibe (a, b) y
 * devuelve un número negativo si a va primero.
 */
export function ordenarPorPrecio(productos: Producto[], orden: 'asc' | 'desc' = 'asc'): Producto[] {
  throw new Error('Ejercicio 7 sin resolver');
}

/**
 * Ejercicio 8. Agrupa los productos por categoría.
 *
 *     agruparPorCategoria(productos)
 *     // { despensa: [café, panela, arepas], tecnologia: [...], papeleria: [...] }
 *
 * Pista: Object.groupBy() lo hace en una línea, pero intenta primero con
 * reduce(): en una entrevista te pueden pedir que lo hagas sin atajos.
 */
export function agruparPorCategoria(productos: Producto[]): Partial<Record<Categoria, Producto[]>> {
  throw new Error('Ejercicio 8 sin resolver');
}

export interface Filtros {
  texto?: string;
  categoria?: Categoria;
  soloDisponibles?: boolean;
}

/**
 * Ejercicio 9. Filtra productos como lo haría un buscador de una tienda.
 *
 * - texto: el nombre lo contiene, sin importar mayúsculas ni espacios al
 *   inicio o al final. Un texto vacío no filtra nada.
 * - categoria: si viene, solo los de esa categoría.
 * - soloDisponibles: si es true, solo los que tienen stock.
 *
 *     filtrarProductos(productos, { texto: 'INALÁMBRICO' })  // audífonos y mouse
 *     filtrarProductos(productos)                            // todos
 *
 * Pista: desestructura con valores por defecto en la firma o en la primera
 * línea: const { texto = '', categoria, soloDisponibles = false } = filtros;
 */
export function filtrarProductos(productos: Producto[], filtros: Filtros = {}): Producto[] {
  throw new Error('Ejercicio 9 sin resolver');
}

export interface Pagina<T> {
  items: T[];
  pagina: number;
  totalPaginas: number;
  hayAnterior: boolean;
  haySiguiente: boolean;
}

/**
 * Ejercicio 10. Devuelve una página de resultados. Las páginas empiezan en 1.
 * Casi todas las pruebas técnicas piden paginar algo.
 *
 *     paginar(['a', 'b', 'c', 'd', 'e'], 2, 2)
 *     // { items: ['c', 'd'], pagina: 2, totalPaginas: 3, hayAnterior: true, haySiguiente: true }
 *
 * Si la página no existe, items es un arreglo vacío.
 *
 * Pista: slice() y Math.ceil(). <T> es un genérico: la función sirve para
 * arreglos de cualquier tipo.
 */
export function paginar<T>(items: T[], pagina: number, porPagina: number): Pagina<T> {
  throw new Error('Ejercicio 10 sin resolver');
}

// ---------------------------------------------------------------------------
// Nivel 3 · Inmutabilidad: así se actualiza el estado en React
// En todos estos, las pruebas revisan que NO modifiques lo que recibes.
// ---------------------------------------------------------------------------

/**
 * Ejercicio 11. Devuelve una copia del producto con el stock descontado.
 * Si no alcanza el stock, lanza un Error con el mensaje 'Stock insuficiente'.
 *
 *     venderUnidades(cafe, 2)  // { ...cafe, stock: 10 }, y cafe sigue con 12
 */
export function venderUnidades(producto: Producto, unidades: number): Producto {
  throw new Error('Ejercicio 11 sin resolver');
}

/**
 * Ejercicio 12. Agrega un producto al carrito. Si ya estaba, aumenta su
 * cantidad en 1. Si no, lo agrega al final con cantidad 1.
 *
 *     agregarAlCarrito([{ productoId: 1, cantidad: 2 }], 1)  // [{ productoId: 1, cantidad: 3 }]
 *     agregarAlCarrito([], 5)                                // [{ productoId: 5, cantidad: 1 }]
 *
 * Ojo: item.cantidad++ modifica el objeto original. Crea uno nuevo con spread.
 */
export function agregarAlCarrito(carrito: ItemCarrito[], productoId: number): ItemCarrito[] {
  throw new Error('Ejercicio 12 sin resolver');
}

/**
 * Ejercicio 13. Quita un producto del carrito, sin importar su cantidad.
 */
export function quitarDelCarrito(carrito: ItemCarrito[], productoId: number): ItemCarrito[] {
  throw new Error('Ejercicio 13 sin resolver');
}

/**
 * Ejercicio 14. Calcula el total del carrito: precio por cantidad de cada
 * item. Si un item apunta a un producto que no existe, ignóralo.
 *
 *     totalCarrito([{ productoId: 1, cantidad: 2 }], productos)  // 64000
 */
export function totalCarrito(carrito: ItemCarrito[], productos: Producto[]): number {
  throw new Error('Ejercicio 14 sin resolver');
}

/**
 * Ejercicio 15. Marca o desmarca un favorito: si el id está, lo quita; si no
 * está, lo agrega al final. Lo vas a usar tal cual en la HeroesApp.
 *
 *     alternarFavorito([1, 2], 3)     // [1, 2, 3]
 *     alternarFavorito([1, 2, 3], 2)  // [1, 3]
 */
export function alternarFavorito(favoritos: number[], id: number): number[] {
  throw new Error('Ejercicio 15 sin resolver');
}

// ---------------------------------------------------------------------------
// Nivel 4 · Asincronía: promesas, async/await y fetch
// ---------------------------------------------------------------------------

/**
 * Ejercicio 16. Devuelve una promesa que se resuelve después de `ms`
 * milisegundos.
 *
 *     await esperar(1000);  // espera un segundo
 *
 * Pista: new Promise((resolve) => ...) y setTimeout().
 */
export function esperar(ms: number): Promise<void> {
  throw new Error('Ejercicio 16 sin resolver');
}

/**
 * Ejercicio 17. Trae un personaje de la API de Rick and Morty y devuélvelo
 * en el formato de tu app (el tipo Personaje de datos.ts).
 *
 * - URL: https://rickandmortyapi.com/api/character/{id}
 * - La API responde en inglés (el tipo PersonajeApi). Traduce los campos:
 *   name → nombre, species → especie, image → imagen, y vivo es true solo
 *   si status es 'Alive'. No devuelvas campos de más.
 * - Si la respuesta no es ok, lanza un Error con el mensaje
 *   `No existe el personaje ${id}`.
 *
 * Pista: const datos: PersonajeApi = await respuesta.json();
 */
export async function obtenerPersonaje(id: number): Promise<Personaje> {
  throw new Error('Ejercicio 17 sin resolver');
}

/**
 * Ejercicio 18. Trae varios personajes A LA VEZ (no uno después de otro) y
 * devuélvelos en el mismo orden de los ids. Usa tu obtenerPersonaje().
 *
 * Pista: Promise.all() con un arreglo de promesas.
 */
export async function obtenerVarios(ids: number[]): Promise<Personaje[]> {
  throw new Error('Ejercicio 18 sin resolver');
}

// ---------------------------------------------------------------------------
// Nivel 5 · Closures
// ---------------------------------------------------------------------------

export interface Contador {
  incrementar(): number;
  decrementar(): number;
  reiniciar(): number;
  valor(): number;
}

/**
 * Ejercicio 19. Crea un contador que guarda su número en un closure. Cada
 * método devuelve el valor después de aplicarse; reiniciar() vuelve al valor
 * inicial. El número no debe quedar expuesto como propiedad del objeto.
 *
 *     const c = crearContador(5);
 *     c.incrementar();  // 6
 *     c.reiniciar();    // 5
 */
export function crearContador(inicial = 0): Contador {
  throw new Error('Ejercicio 19 sin resolver');
}

/**
 * Ejercicio 20. debounce: devuelve una versión de `fn` que solo se ejecuta
 * cuando pasan `ms` milisegundos sin que la vuelvan a llamar, con los últimos
 * argumentos que recibió. Es lo que se usa en un buscador para no pedir a la
 * API una búsqueda por cada tecla.
 *
 *     const buscar = debounce((texto: string) => console.log(texto), 300);
 *     buscar('r'); buscar('ri'); buscar('rick');
 *     // 300 ms después imprime solo 'rick'
 *
 * La firma se ve rara por el genérico A: significa "recibe una función con
 * cualquier lista de argumentos y devuelve otra con los mismos argumentos".
 *
 * Pista: guarda el id de setTimeout en una variable del closure y usa
 * clearTimeout() en cada llamada.
 */
export function debounce<A extends unknown[]>(fn: (...args: A) => void, ms: number): (...args: A) => void {
  throw new Error('Ejercicio 20 sin resolver');
}
