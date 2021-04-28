var readline = require('readline'); 

var rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 

}); 

rl.question("Ingrese una frase ", function(answer) { 
    console.log(`                   ${answer}`);
    rl.close(); 
});


