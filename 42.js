const fs = require('fs');
const readline = require('readline');
let map = new Map();

//Para leer linea
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Para leer archivos
const archivo = readline.createInterface({
    input: fs.createReadStream('./DATOS.DAT'),
    crlfDelay: Infinity
});


archivo.on('line', (line) => {
    let obj = JSON.parse(line);
    map.set(obj.id, obj);
    rl.question('Ingresa la id que desee borrar: ', (answer) => {
        map.delete(answer);
        for (c of map.values()) {
            fs.writeFileSync('./DATOS.DAT', JSON.stringify(c));
        }
        rl.close();
    });
});

/*
De los ejercicios del 41 al 45 me base en ejemplos que 
encontre en internet ya que no me salieron y me parecieron muy dificiles:c
*/