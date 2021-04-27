//<>
var readline = require('readline'); 

var rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 

}); 

const multi = num =>{
    for(let i=0; i<=10; i++)
        console.log(num*i);
}

rl.question("Ingrese un numero ", function(answer) { 
    multi(answer);
    rl.close(); 
});