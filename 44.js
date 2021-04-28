const fs = require('fs');
const readline = require('readline');

let list = new Array();

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
    list.push(obj);
    fr.close();
}).on('close',()=>{
    rl.question("Ingrese el estado: ", (answer) => {
        let data = answer.split(',');
        let filtered = list.filter(e => e.state.toLowerCase() === answer.toLowerCase());
        for(c of filtered){
            console.log(c);
        }
        rl.close();
    });
});

/*
De los ejercicios del 41 al 45 me base en ejemplos que 
encontre en internet ya que no me salieron y me parecieron muy dificiles:c
*/