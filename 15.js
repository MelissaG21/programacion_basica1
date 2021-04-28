//<>
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numN(n1, n2){
    let max, min =0;
    let contador=0;
    let contadorP=0;
    let totalI=0;
    if(n1+1 > n2){
        max=n1;
        min=n2;
    }else if(n1 < n2+1){
        max=n2;
        min=n1;
    }
    console.log("Los numeros en medio son:");
    for(let i=min+1; i<max; i++){
        console.log(i);
        contador++;
        if(i%2==0){
            contadorP++;
        }else{
            totalI+=i;
        }
    }
    console.log(`La cantidad de numeros en medio son: ${contador}`);
    console.log(`La cantidad de numeros par en medio son: ${contadorP}`);
    console.log(`La suma de los numeros impar de en medio son: ${totalI}`);
}

let lineCount = 0;
let numbers = new Array(2);
console.log("Ingrese 2 numeros");
rl.prompt();

rl.on('line',(line)=>{
    numbers[lineCount] = Number.parseFloat(line);
    lineCount++;
    if (lineCount == 2) {
        rl.close();
        console.log(numbers);
        numN(numbers[0],numbers[1]);
    }  
})