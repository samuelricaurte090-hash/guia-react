// Tipos y datos de la semana 1.
// Para el reto, copia este archivo a carrito/src/datos.ts.

export type Categoria = 'despensa' | 'tecnologia' | 'papeleria';

export interface Producto {
  id: number;
  nombre: string;
  precio: number; // en pesos colombianos, sin decimales
  categoria: Categoria;
  stock: number;
}

export interface ItemCarrito {
  productoId: number;
  cantidad: number;
}

/** Un personaje como lo usa tu app: en español y solo con lo que necesitas. */
export interface Personaje {
  id: number;
  nombre: string;
  especie: string;
  imagen: string;
  vivo: boolean;
}

/** Un personaje como lo devuelve la API de Rick and Morty: en inglés y con más campos. */
export interface PersonajeApi {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  image: string;
}

export const productos: Producto[] = [
  { id: 1, nombre: 'Café de Huila 500 g', precio: 32000, categoria: 'despensa', stock: 12 },
  { id: 2, nombre: 'Panela orgánica', precio: 6500, categoria: 'despensa', stock: 0 },
  { id: 3, nombre: 'Audífonos inalámbricos', precio: 189000, categoria: 'tecnologia', stock: 5 },
  { id: 4, nombre: 'Teclado mecánico', precio: 245000, categoria: 'tecnologia', stock: 3 },
  { id: 5, nombre: 'Cuaderno argollado', precio: 9000, categoria: 'papeleria', stock: 40 },
  { id: 6, nombre: 'Esferos x 12', precio: 15000, categoria: 'papeleria', stock: 0 },
  { id: 7, nombre: 'Mouse inalámbrico', precio: 85000, categoria: 'tecnologia', stock: 8 },
  { id: 8, nombre: 'Arepas de maíz x 10', precio: 7800, categoria: 'despensa', stock: 25 },
];
