//<>
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calificaciones(arrayN){
    let contador=0;
    for(let i=1; i<11; i++){
        contador+=arrayN[i];
    }
    return contador/10;
}

function buscar(arrayN, num){
    for(let i=1; i<11; i++){
        if(arrayN[i] == num){
            console.log(`El numero que desea encontrar se encuentra en la posicion: ${i}`);
        }
    }
}

let lineCount = 0;
let numbers = new Array(11);
let number;
console.log("Ingrese primero la calificacion a buscar y luego las 10 calificaciones");
rl.prompt();
rl.on('line',(line)=>{
    numbers[lineCount] = Number.parseFloat(line);
    lineCount++;
    if (lineCount == 11) {
        rl.close();
        console.log('La media de sus calificaciones es: ' + calificaciones(numbers));
        buscar(numbers,numbers[0]);
    }  
})
