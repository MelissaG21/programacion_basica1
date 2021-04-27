//<>
var readline = require('readline'); 

var rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 

}); 

function multiploTres(limite){
    let contador=0
    for(let i=1; i<=limite; i++){
        if(i%3 == 0){
            console.log(i);
            contador += 1;
        }
    }
    console.log(`Hay ${contador} numeros multiplos de tres, del 1 al ${limite}`);
}

rl.question("Introduzca un numero limite: ", function(answer) { 
    if(answer > 0){
        multiploTres(answer);
    }else{
        console.log("Cometio un error");
    }
    rl.close(); 
}); 


