 let contador=0
for(let i=0; i<101; i++){
    if(i%2 != 0){
        console.log(i);
        contador += 1;
    }
}
console.log("Hay " + contador +" numeros impares del 0 al 100");