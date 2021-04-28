/*
//Hacer un programa que nos permita dar altas 
//en el archivo DATOS.DAT, cuyos campos son: 
//ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO. 
*/
/*
De los ejercicios del 41 al 45 me base en ejemplos que 
encontre en internet ya que no me salieron y me parecieron muy dificiles:c
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let data = new Array(5);
const Data = require('./Data');
const fs = require('fs');
console.log("Ingrese su ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO.");
rl.prompt();

rl.on('line',(line)=>{
    data[lineCount] = line;
    lineCount++;
    if (lineCount == 5) {
        rl.close();
        console.log(`${data[0]} ${data[1]} ${data[2]} ${data[3]} ${data[4]}`);
        let json = JSON.stringify(new Data(campos[0],campos[1],campos[2],campos[3],campos[4]));
        fs.writeFileSync('./DATOS.DAT',json);
        process.exit();
    }  
});

