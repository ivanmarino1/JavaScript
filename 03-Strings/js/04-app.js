const producto = '          Monitor 20 Pulgadas        ';

console.log(producto);
console.log(producto.length);

// Eliminar del inicio...
console.log(producto.trimStart()); // Inicio
console.log(producto.trimEnd()); // Final

console.log(producto.trimStart().trimEnd()); // Inicio y Final.

console.log(producto.trim()); // Inicia y Final.