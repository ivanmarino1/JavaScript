"use strict";

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
}

Object.seal( producto );

producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));

// Diferencia entre seal y freeze. 
// Freeze no deja hacer nada.
// Seal deja modificar las llaves existentes de un objeto pero no deja añadir nuevas ni eliminarlas.