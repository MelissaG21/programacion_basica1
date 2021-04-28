const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu(num1, num2, opcion){
    switch(opcion){
        case 1:
            return num1+num2;
            break;
        case 2:
            return num1-num2;
            break;
        case 3: 
            return num1*num2;
            break;
        case 4:
            return num1/num2;
            break;
        default:
            return "Hay un error";
            break;
    }
}


let lineCount = 0;
let numbers = new Array(3);
console.log("Menu:");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicación");
console.log("4. División");
console.log("Ingrese los 2 numeros con los que desea hacer la operación y a continuación el numero de la opción que desea elegir");
rl.prompt();

rl.on('line',(line)=>{
    numbers[lineCount] = Number.parseFloat(line);
    lineCount++;
    if (lineCount == 3) {
        rl.close();
        console.log(menu(numbers[0], numbers[1], numbers[2]));
    }  
});