
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 function getMax (numbers){
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if(max < numbers[i]) max = numbers[i];
    }
    return max;
}

function getMin (numbers){
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if(min > numbers[i]) min = numbers[i];
    }
    return min;
}


let lineCount = 0;
let numbers = new Array(5);
console.log("Ingrese 5 numeros");
rl.prompt();

rl.on('line',(line)=>{
    numbers[lineCount] = Number.parseFloat(line);
    lineCount++;
    if (lineCount == 5) {
        rl.close();
        console.log(numbers);
        console.log('El minimo de los numeros es: ' + getMin(numbers));
        console.log('El maximo de los numeros es: ' + getMax(numbers));
    }  
})