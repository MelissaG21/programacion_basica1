var readline = require('readline'); 

var rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 

}); 


rl.question("Ingrese S o N ", function(answer) { 
    if(answer == 'S' || answer == 'N'){
        console.log("Todo bien"); 
    }else{
        console.log("Cometio un error");
    }
    rl.close(); 
});