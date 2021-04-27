//<>
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function sumaDados(){
    let dado1, dado2;
    let contador=0;
    for(let i=0; i<100; i++){
        dado1=getRandomInt(1,7);
        dado2=getRandomInt(1,7);
        if(dado1+dado2 == 10)
            contador++;
    }
    return contador;
}

console.log("El numero de veces que los dados sumaron 10 fueron: "+sumaDados());