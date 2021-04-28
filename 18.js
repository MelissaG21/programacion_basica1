const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let letra;
let contador = 0;
rl.question("Ingrese la letra a buscar: ", (answer)=>{
    letra = answer;
});
rl.on('line', (line) =>{ 
    for(let c of line){
        if (c === letra) contador++;
    }
    console.log(`El numero de ${letra} en la frase es de ${contador}`);
    rl.close();
});
rl.prompt();