//<>
var readline = require('readline'); 

var rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 

}); 

function factorial(num){
    let total=1;
    for(let i =0; i<num; i++)
        total=total*(i+1);
    return total;
}

rl.question("Introduzca un numero ", function(answer) { 
    if(answer > 0){
        console.log(factorial(answer));
    }else{
        console.log("Cometio un error");
    }
    rl.close(); 
}); 