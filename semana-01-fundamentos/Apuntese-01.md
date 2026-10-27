FIND: Busca en un arreglo dada una condicion, y se detiene en el primero que encuetra

productos.find(p => p.id === id)

FIND => Devuelve un elemento o undefined

MAP: Aplica una funcion a cada elemento de un arreglo, y devuelve un arreglo nuevo, no modifica el original

.map((i) => (i.productoId === productoId ? { ...i, cantidad: i.cantidad - 1 } : i)) Codigo de restar un producto

MAP => Devuelve un arreglo nuevo transformado sin modificar el original y de misma longitud

REDUCE: Recorre el arreglo aplicando una funcion callback a cada elemento en cada vuelta y asi acumular un unico valor de resultado

const sumaTotal = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0); 0 es el valor inicial del acumulador, da error si no esta

REDUCE => Devuelve un solo numero, objeto o lo que quieras

FILTER: Sirve para preguntar que elementos del arreglo se quedan o se van dada una condicion especifica, y tampoco modifica el arreglo original, devuelve uno nuevo 

productos.filter(p => p.stock > 0)

FILTER => Devuelve un arreglo igual o mas corto 

{ a: 1 } === { a: 1 }: Da false porque no esta comparando sus valores o propiedades, sino el espacio de memmoria que ocupan, cuando se actualiza el estado en react compara el valor nuevo con el viejo por medio de ===, entonces cuando se utiliza item.cantidad++ se modifica el objeto, pero no se cambia el espacio de memoria entonces nuevo === viejo da true y react no cambia nada, en cambio si se crea uno nuevo {...item, cantidad: item.cantidad + 1} en otro espacio de memoria da false y react ve el cambio y pinta de nuevo

Spread: Crea un clon superficial de un objeto o arreglo, esparciendo sus propiedades en el clon para evitar mutar los datos originales. En arreglos [...lista] copia sus elementos, en objetos {...objeto} copia sus propiedades

Interface: Es el molde que debe cumplir determinado objeto en su creacion. TypeScript la hace cada vez que usas el objeto, por ejemplo al pasarlo a una función, solo existe mientras se escribe, cuando el codigo se ejecuta desaparece.
<T>: Se utiliza para decir que una funcion o interfaz recibe cualquier tipo de dato, lo importante es que recuerda que tipo recibio

paginar(['a', 'b', 'c'], 1, 2)  // T = string   → el resultado trae items: string[] los tipos de resultado seran strings
paginar([10, 20, 30], 1, 2)     // T = number   → el resultado trae items: number[] los tipos de resultado sera number
paginar(productos, 1, 2)        // T = Producto → el resultado trae items: Producto[] los tipos de resultado sera objetos