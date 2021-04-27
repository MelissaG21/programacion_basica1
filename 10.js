//<>
var readline = require('readline'); 

var rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 

}); 

rl.question("Introduzca un numero ", function(answer) { 
    if(answer%2 == 0){
        console.log("El numero es par");
    }else if (answer%2 != 0){
        console.log("El numero es impar");
    }else{
        console.log("Cometio un error");
    }
    rl.close(); 
}); 