/**
 * Pruebas de la semana 1. No las modifiques: tu código es el que debe pasar.
 *
 * Correr todo:          npm test -- semana-01
 * Vigilar al guardar:   npm run test:watch -- semana-01
 * Un solo ejercicio:    npm test -- semana-01 -t ej07
 */

import { afterEach, describe, expect, it, vi } from 'vitest';

import { productos } from './datos';
import type { ItemCarrito, PersonajeApi } from './datos';
import {
  agregarAlCarrito,
  agruparPorCategoria,
  alternarFavorito,
  buscarPorId,
  crearContador,
  debounce,
  esperar,
  filtrarProductos,
  iniciales,
  nombresDisponibles,
  obtenerPersonaje,
  obtenerVarios,
  ordenarPorPrecio,
  paginar,
  precioConIva,
  quitarDelCarrito,
  saludo,
  sumarPares,
  totalCarrito,
  venderUnidades,
} from './ejercicios';

const ids = (lista: { id: number }[]) => lista.map((p) => p.id);

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

// Nivel 1 ------------------------------------------------------------------

describe('ej01 · precioConIva', () => {
  it('usa 19 % por defecto', () => {
    expect(precioConIva(10000)).toBe(11900);
  });

  it('acepta otro IVA', () => {
    expect(precioConIva(10000, 0.05)).toBe(10500);
  });

  it('redondea al peso más cercano', () => {
    expect(precioConIva(12345)).toBe(14691);
    expect(precioConIva(0)).toBe(0);
  });
});

describe('ej02 · saludo', () => {
  it('de 0 a 11 dice buenos días', () => {
    expect(saludo('Ana', 0)).toBe('Buenos días, Ana');
    expect(saludo('Ana', 8)).toBe('Buenos días, Ana');
    expect(saludo('Ana', 11)).toBe('Buenos días, Ana');
  });

  it('de 12 a 18 dice buenas tardes', () => {
    expect(saludo('Luis', 12)).toBe('Buenas tardes, Luis');
    expect(saludo('Luis', 18)).toBe('Buenas tardes, Luis');
  });

  it('de 19 a 23 dice buenas noches', () => {
    expect(saludo('Ana', 19)).toBe('Buenas noches, Ana');
    expect(saludo('Ana', 23)).toBe('Buenas noches, Ana');
  });
});

describe('ej03 · iniciales', () => {
  it('toma la primera letra de cada palabra, en mayúscula', () => {
    expect(iniciales('samuel ricaurte')).toBe('SR');
  });

  it('ignora los espacios de más', () => {
    expect(iniciales('  ana   maría  pérez ')).toBe('AMP');
  });

  it('funciona con una sola palabra', () => {
    expect(iniciales('cher')).toBe('C');
  });
});

describe('ej04 · sumarPares', () => {
  it('suma solo los pares', () => {
    expect(sumarPares([1, 2, 3, 4])).toBe(6);
    expect(sumarPares([-2, -3, 0, 7])).toBe(-2);
  });

  it('devuelve 0 si no hay pares o la lista está vacía', () => {
    expect(sumarPares([1, 3, 5])).toBe(0);
    expect(sumarPares([])).toBe(0);
  });
});

// Nivel 2 ------------------------------------------------------------------

describe('ej05 · nombresDisponibles', () => {
  it('devuelve los nombres de los productos con stock, en orden', () => {
    expect(nombresDisponibles(productos)).toEqual([
      'Café de Huila 500 g',
      'Audífonos inalámbricos',
      'Teclado mecánico',
      'Cuaderno argollado',
      'Mouse inalámbrico',
      'Arepas de maíz x 10',
    ]);
  });

  it('devuelve un arreglo vacío si no hay productos', () => {
    expect(nombresDisponibles([])).toEqual([]);
  });
});

describe('ej06 · buscarPorId', () => {
  it('encuentra el producto', () => {
    expect(buscarPorId(productos, 4)?.nombre).toBe('Teclado mecánico');
  });

  it('devuelve undefined si no existe', () => {
    expect(buscarPorId(productos, 99)).toBeUndefined();
  });
});

describe('ej07 · ordenarPorPrecio', () => {
  it('ordena de menor a mayor por defecto', () => {
    expect(ids(ordenarPorPrecio([...productos]))).toEqual([2, 8, 5, 6, 1, 7, 3, 4]);
  });

  it('ordena de mayor a menor con desc', () => {
    expect(ids(ordenarPorPrecio([...productos], 'desc'))).toEqual([4, 3, 7, 1, 6, 5, 8, 2]);
  });

  it('no modifica el arreglo original', () => {
    const copia = [...productos];
    const ordenados = ordenarPorPrecio(copia);
    expect(ordenados).not.toBe(copia);
    expect(ids(copia)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe('ej08 · agruparPorCategoria', () => {
  it('agrupa conservando el orden dentro de cada grupo', () => {
    const grupos = agruparPorCategoria(productos);
    expect(Object.keys(grupos).sort()).toEqual(['despensa', 'papeleria', 'tecnologia']);
    expect(ids(grupos.despensa ?? [])).toEqual([1, 2, 8]);
    expect(ids(grupos.tecnologia ?? [])).toEqual([3, 4, 7]);
    expect(ids(grupos.papeleria ?? [])).toEqual([5, 6]);
  });

  it('devuelve un objeto vacío si no hay productos', () => {
    expect(agruparPorCategoria([])).toEqual({});
  });
});

describe('ej09 · filtrarProductos', () => {
  it('sin filtros devuelve todos', () => {
    expect(ids(filtrarProductos(productos))).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(ids(filtrarProductos(productos, { texto: '' }))).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('busca por texto sin importar mayúsculas ni espacios de los lados', () => {
    expect(ids(filtrarProductos(productos, { texto: 'INALÁMBRICO' }))).toEqual([3, 7]);
    expect(ids(filtrarProductos(productos, { texto: '  café ' }))).toEqual([1]);
  });

  it('filtra por categoría', () => {
    expect(ids(filtrarProductos(productos, { categoria: 'papeleria' }))).toEqual([5, 6]);
  });

  it('filtra solo los disponibles', () => {
    expect(ids(filtrarProductos(productos, { soloDisponibles: true }))).toEqual([1, 3, 4, 5, 7, 8]);
  });

  it('combina los filtros', () => {
    const filtros = { texto: 'a', categoria: 'despensa', soloDisponibles: true } as const;
    expect(ids(filtrarProductos(productos, filtros))).toEqual([1, 8]);
  });
});

describe('ej10 · paginar', () => {
  const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  it('devuelve la primera página', () => {
    expect(paginar(letras, 1, 3)).toEqual({
      items: ['a', 'b', 'c'],
      pagina: 1,
      totalPaginas: 3,
      hayAnterior: false,
      haySiguiente: true,
    });
  });

  it('devuelve una página del medio', () => {
    expect(paginar(letras, 2, 3)).toEqual({
      items: ['d', 'e', 'f'],
      pagina: 2,
      totalPaginas: 3,
      hayAnterior: true,
      haySiguiente: true,
    });
  });

  it('la última página puede venir incompleta', () => {
    expect(paginar(letras, 3, 3)).toEqual({
      items: ['g'],
      pagina: 3,
      totalPaginas: 3,
      hayAnterior: true,
      haySiguiente: false,
    });
  });

  it('una página que no existe viene vacía', () => {
    expect(paginar(letras, 5, 3).items).toEqual([]);
    expect(paginar(letras, 5, 3).haySiguiente).toBe(false);
  });

  it('una lista vacía tiene 0 páginas', () => {
    expect(paginar([], 1, 10)).toEqual({
      items: [],
      pagina: 1,
      totalPaginas: 0,
      hayAnterior: false,
      haySiguiente: false,
    });
  });
});

// Nivel 3 ------------------------------------------------------------------

describe('ej11 · venderUnidades', () => {
  // Cada prueba usa su propia copia del café (stock 12).
  const nuevoCafe = () => ({ ...productos[0]! });

  it('devuelve una copia con el stock descontado', () => {
    const cafe = nuevoCafe();
    const vendido = venderUnidades(cafe, 2);
    expect(vendido).toEqual({ ...cafe, stock: 10 });
    expect(vendido).not.toBe(cafe);
  });

  it('no modifica el producto original', () => {
    const cafe = nuevoCafe();
    venderUnidades(cafe, 2);
    expect(cafe.stock).toBe(12);
  });

  it('permite vender todo el stock, pero no más', () => {
    expect(venderUnidades(nuevoCafe(), 12).stock).toBe(0);
    expect(() => venderUnidades(nuevoCafe(), 13)).toThrow('Stock insuficiente');
  });
});

describe('ej12 · agregarAlCarrito', () => {
  it('agrega un producto nuevo con cantidad 1 al final', () => {
    expect(agregarAlCarrito([], 5)).toEqual([{ productoId: 5, cantidad: 1 }]);
    expect(agregarAlCarrito([{ productoId: 1, cantidad: 2 }], 5)).toEqual([
      { productoId: 1, cantidad: 2 },
      { productoId: 5, cantidad: 1 },
    ]);
  });

  it('si ya está, aumenta su cantidad sin cambiar el orden', () => {
    const carrito = [
      { productoId: 1, cantidad: 2 },
      { productoId: 3, cantidad: 1 },
    ];
    expect(agregarAlCarrito(carrito, 1)).toEqual([
      { productoId: 1, cantidad: 3 },
      { productoId: 3, cantidad: 1 },
    ]);
  });

  it('no modifica el carrito original ni sus items', () => {
    const item = { productoId: 1, cantidad: 2 };
    const carrito: ItemCarrito[] = [item];

    const conUnoMas = agregarAlCarrito(carrito, 1);
    const conOtro = agregarAlCarrito(carrito, 7);

    expect(conUnoMas).not.toBe(carrito);
    expect(conOtro).not.toBe(carrito);
    expect(carrito).toEqual([{ productoId: 1, cantidad: 2 }]);
    expect(item.cantidad).toBe(2);
  });
});

describe('ej13 · quitarDelCarrito', () => {
  const carrito = [
    { productoId: 1, cantidad: 2 },
    { productoId: 3, cantidad: 1 },
  ];

  it('quita el producto', () => {
    expect(quitarDelCarrito(carrito, 1)).toEqual([{ productoId: 3, cantidad: 1 }]);
  });

  it('si no está, devuelve una copia igual', () => {
    const resultado = quitarDelCarrito(carrito, 99);
    expect(resultado).toEqual(carrito);
    expect(resultado).not.toBe(carrito);
  });

  it('no modifica el carrito original', () => {
    quitarDelCarrito(carrito, 1);
    expect(carrito).toHaveLength(2);
  });
});

describe('ej14 · totalCarrito', () => {
  it('suma precio por cantidad', () => {
    const carrito = [
      { productoId: 1, cantidad: 2 },
      { productoId: 5, cantidad: 3 },
    ];
    expect(totalCarrito(carrito, productos)).toBe(91000);
  });

  it('ignora productos que no existen', () => {
    const carrito = [
      { productoId: 1, cantidad: 2 },
      { productoId: 99, cantidad: 5 },
    ];
    expect(totalCarrito(carrito, productos)).toBe(64000);
  });

  it('un carrito vacío vale 0', () => {
    expect(totalCarrito([], productos)).toBe(0);
  });
});

describe('ej15 · alternarFavorito', () => {
  it('agrega el id si no está', () => {
    expect(alternarFavorito([1, 2], 3)).toEqual([1, 2, 3]);
    expect(alternarFavorito([], 3)).toEqual([3]);
  });

  it('quita el id si ya está', () => {
    expect(alternarFavorito([1, 2, 3], 2)).toEqual([1, 3]);
  });

  it('no modifica el arreglo original', () => {
    const favoritos = [1, 2];
    alternarFavorito(favoritos, 3);
    alternarFavorito(favoritos, 1);
    expect(favoritos).toEqual([1, 2]);
  });
});

// Nivel 4 ------------------------------------------------------------------

const URL_API = 'https://rickandmortyapi.com/api/character';

// Así responde la API de verdad: en inglés y con más campos de los que necesitas.
const RICK: PersonajeApi & { gender: string } = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  image: `${URL_API}/avatar/1.jpeg`,
  gender: 'Male',
};

function respuestaFalsa(cuerpo: unknown, status = 200) {
  return { ok: status >= 200 && status < 300, status, json: async () => cuerpo } as Response;
}

/** Reemplaza fetch por una versión falsa: las pruebas no usan internet. */
function simularApi(personajes: PersonajeApi[], antesDeResponder?: Promise<void>) {
  const fetchFalso = vi.fn(async (url: string | URL | Request) => {
    await antesDeResponder;
    const id = Number(String(url).split('/').pop());
    const personaje = personajes.find((p) => p.id === id);
    return personaje ? respuestaFalsa(personaje) : respuestaFalsa({ error: 'Character not found' }, 404);
  });
  vi.stubGlobal('fetch', fetchFalso);
  return fetchFalso;
}

const urlsPedidas = (fetchFalso: ReturnType<typeof simularApi>) => fetchFalso.mock.calls.map(([url]) => String(url));

describe('ej16 · esperar', () => {
  it('se resuelve cuando pasa el tiempo indicado, no antes', async () => {
    vi.useFakeTimers();
    let listo = false;
    esperar(1000).then(() => {
      listo = true;
    });

    await vi.advanceTimersByTimeAsync(999);
    expect(listo).toBe(false);

    await vi.advanceTimersByTimeAsync(1);
    expect(listo).toBe(true);
  });
});

describe('ej17 · obtenerPersonaje', () => {
  it('pide el personaje a la URL correcta', async () => {
    const fetchFalso = simularApi([RICK]);
    await obtenerPersonaje(1);
    expect(urlsPedidas(fetchFalso)).toEqual([`${URL_API}/1`]);
  });

  it('traduce los campos y no deja los de la API', async () => {
    simularApi([RICK]);
    expect(await obtenerPersonaje(1)).toEqual({
      id: 1,
      nombre: 'Rick Sanchez',
      especie: 'Human',
      imagen: `${URL_API}/avatar/1.jpeg`,
      vivo: true,
    });
  });

  it('vivo es false si el status no es Alive', async () => {
    simularApi([
      { ...RICK, id: 5, status: 'Dead' },
      { ...RICK, id: 6, status: 'unknown' },
    ]);
    expect((await obtenerPersonaje(5)).vivo).toBe(false);
    expect((await obtenerPersonaje(6)).vivo).toBe(false);
  });

  it('lanza un error si la API responde 404', async () => {
    simularApi([RICK]);
    await expect(obtenerPersonaje(9999)).rejects.toThrow('No existe el personaje 9999');
  });
});

describe('ej18 · obtenerVarios', () => {
  const personajes = [
    { ...RICK, id: 1, name: 'Rick Sanchez' },
    { ...RICK, id: 2, name: 'Morty Smith' },
    { ...RICK, id: 3, name: 'Summer Smith' },
  ];

  it('devuelve los personajes en el orden de los ids', async () => {
    simularApi(personajes);
    const resultado = await obtenerVarios([3, 1, 2]);
    expect(resultado.map((p) => p.nombre)).toEqual(['Summer Smith', 'Rick Sanchez', 'Morty Smith']);
  });

  it('pide todos a la vez, no uno después de otro', async () => {
    let soltar!: () => void;
    const barrera = new Promise<void>((resolve) => {
      soltar = resolve;
    });
    const fetchFalso = simularApi(personajes, barrera);

    const promesa = obtenerVarios([1, 2, 3]);
    promesa.catch(() => {}); // si falla, el error se reporta en el await de abajo
    await new Promise((resolve) => setTimeout(resolve, 10));

    // Ninguna respuesta ha llegado todavía. Si ya se pidieron los 3, van en paralelo.
    expect(fetchFalso).toHaveBeenCalledTimes(3);
    soltar();
    await promesa;
  });

  it('con una lista vacía devuelve un arreglo vacío', async () => {
    simularApi(personajes);
    expect(await obtenerVarios([])).toEqual([]);
  });
});

// Nivel 5 ------------------------------------------------------------------

describe('ej19 · crearContador', () => {
  it('cuenta desde el valor inicial', () => {
    const c = crearContador(5);
    expect(c.valor()).toBe(5);
    expect(c.incrementar()).toBe(6);
    expect(c.incrementar()).toBe(7);
    expect(c.decrementar()).toBe(6);
    expect(c.valor()).toBe(6);
  });

  it('reiniciar vuelve al valor inicial', () => {
    const c = crearContador(5);
    c.incrementar();
    c.incrementar();
    expect(c.reiniciar()).toBe(5);
  });

  it('empieza en 0 por defecto', () => {
    expect(crearContador().valor()).toBe(0);
  });

  it('cada contador tiene su propio número', () => {
    const a = crearContador();
    const b = crearContador();
    a.incrementar();
    a.incrementar();
    expect(a.valor()).toBe(2);
    expect(b.valor()).toBe(0);
  });

  it('el número no queda expuesto: solo se cambia con los métodos', () => {
    expect(Object.keys(crearContador()).sort()).toEqual(['decrementar', 'incrementar', 'reiniciar', 'valor']);
  });
});

describe('ej20 · debounce', () => {
  it('se ejecuta una sola vez, con los últimos argumentos', () => {
    vi.useFakeTimers();
    const fn = vi.fn<(texto: string) => void>();
    const buscar = debounce(fn, 300);

    buscar('r');
    buscar('ri');
    buscar('rick');
    vi.advanceTimersByTime(299);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('rick');
  });

  it('cada llamada nueva reinicia la espera', () => {
    vi.useFakeTimers();
    const fn = vi.fn<(texto: string) => void>();
    const buscar = debounce(fn, 300);

    buscar('a');
    vi.advanceTimersByTime(200);
    buscar('ab');
    vi.advanceTimersByTime(200);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('ab');
  });

  it('vuelve a funcionar después de ejecutarse', () => {
    vi.useFakeTimers();
    const fn = vi.fn<(texto: string) => void>();
    const buscar = debounce(fn, 300);

    buscar('morty');
    vi.advanceTimersByTime(300);
    buscar('summer');
    vi.advanceTimersByTime(300);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenLastCalledWith('summer');
  });
});
