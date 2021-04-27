//<>
var readline = require('readline'); 

var rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 

}); 

rl.question("Introduzca un numero ", function(answer) { 
    if(answer > 0){
        console.log("El numero es positivo");
    }else if (answer < 0){
        console.log("El numero es negativo");
    }else if (answer == 0){
        console.log("El numero es cero");
    }else{
        console.log("Cometio un error");
    }
    rl.close(); 
}); 