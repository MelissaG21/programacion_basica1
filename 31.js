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

function factorial(num){
    let total=1;
    for(let i =0; i<num; i++)
        total=total*(i+1);
    return total;
}

rl.question("Ingrese un numero ", function(answer) { 
    if(isNaN(answer) == false){
        if(answer%2 == 0){
            console.log("El numero es par");
        }else if (answer%2 != 0){
            console.log("El numero es impar");
        }

        console.log("Su factorial es: ");
        if(answer > 0){
            console.log(factorial(answer));
        }else{
            console.log("El factorial sòlo se calcula en numeros naturales");
        }
        console.log("Su tabla de multiplicar es: ");
        multi(answer);

    }else{
        console.log("Cometio un error");
    }
    rl.close(); 
});
