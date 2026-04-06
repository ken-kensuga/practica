
// despues del const siempre lo que se pone es el nombre, y despues de "=" es lo que se le asigna a
//  esa variable, en este caso se le asigna el modulo http, que es un modulo de nodejs para
//  crear servidores web, y despues se crea un servidor con el metodo createServer, 
// que recibe una funcion como parametro, esa 
// funcion recibe dos parametros, 
// req y res, que son la solicitud
//  y la respuesta respectivamente, 
// dentro de esa funcion se establece un header para permitir el acceso desde cualquier origen, 
// y luego se envia una respuesta con un color aleatorio de la lista de colores, finalmente se 
// pone el servidor a escuchar en el puerto 3000 y se imprime un mensaje en la consola indicando
//  que el servidor esta corriendo.

const http = require ("http")

const colors = ["red", "blue", "green", "orange"]

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.end(colors[Math.floor(Math.random() * colors.length)])
});
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor funcionando en: http://localhost:${PORT}`);
});