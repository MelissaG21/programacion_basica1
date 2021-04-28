//<>
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calificaciones(arrayN){
    let contador=0;
    for(let i=0; i<10; i++){
        contador+=arrayN[i];
    }
    return contador/10;
}

let lineCount = 0;
let numbers = new Array(10);
console.log("Ingrese las 10 calificaciones");
rl.prompt();

rl.on('line',(line)=>{
    numbers[lineCount] = Number.parseFloat(line);
    lineCount++;
    if (lineCount == 10) {
        rl.close();
        console.log('La media de sus calificaciones es: ' + calificaciones(numbers));
    }  
})