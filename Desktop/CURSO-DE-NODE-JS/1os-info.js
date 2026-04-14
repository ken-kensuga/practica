const os = require ("node:os");
console.log("informacion del sistema operativo");

console.log("nombre del sistema operativo", os.platform());
console.log("version del sistema operativo", os.release());
console.log("arquitectura del sistema operativo", os.arch());
console.log("memoria total del sistema operativo", os.totalmem()/1024/1024/1024, "GB");
console.log("memoria libre del sistema operativo", os.freemem()/1024/1024/1024, "GB");
console.log("numero de nucleos del sistema operativo", os.cpus().length);
console.log("informacion de cada nucleo del sistema operativo", os.cpus()); 
