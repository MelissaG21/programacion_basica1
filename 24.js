//<>
var readline = require('readline'); 

var rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 

}); 

const primo = numero => {
    if(numero == 1 || numero==4)
        return false;
    for(let x=2; x < numero/2; x++){
        if(numero%x == 0)
            return false;
    }
    return true;
}



rl.question("Ingrese un numero mayor o igual que la unidad ", function(answer) { 
    if(answer > 0){
        if(primo(answer) == true)
            console.log("Es primo"); 
        else
            console.log("No es primo"); 
    }else{
        console.log("Cometio un error");
    }
    rl.close(); 
});