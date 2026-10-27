.map((i) => (i.productoId === productoId ? { ...i, cantidad: i.cantidad - 1 } : i)) Codigo de restar un producto 
