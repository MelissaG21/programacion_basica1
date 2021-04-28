const fs = require('fs');
const readline = require('readline');
let map = new Map();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fr = readline.createInterface({
    input: fs.createReadStream('./DATOS.DAT'),
    crlfDelay: Infinity
});

fr.on('line', (line) => {
    let obj = JSON.parse(line);
    map.set(obj.id, obj);
    rl.question('Ingrese la id : ', (answer) => {
        console.log(map.get(answer))
        rl.close();
    });
});

/*
De los ejercicios del 41 al 45 me base en ejemplos que 
encontre en internet ya que no me salieron y me parecieron muy dificiles:c
*/