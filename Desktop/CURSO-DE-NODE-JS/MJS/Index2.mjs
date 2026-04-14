//.js usa por defecto communJS
//puedes utilizar .mjs para utilizar ES Modules
// o puedes forzar que utilice .cjs para utilizar CommonJS

import { sum, substract, multiply, divide } from '../sum.mjs';

console.log(sum(2, 2));
console.log(substract(2, 2));
console.log(multiply(2, 2));
console.log(divide(2, 2));


