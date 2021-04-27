//<>
var readline = require('readline'); 

var rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 

}); 

rl.question("Ingrese el numero maximo ", function(answer) { 
    if(answer > 0){
        for(i=0; i<=answer; i++)
        console.log(i); 
    }else{
        console.log("Cometio un error");
    }
    rl.close(); 
}); 
