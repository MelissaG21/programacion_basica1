let resultI=0;
let resultP=0;
for(let i=1; i<=100; i++){
    if(i%2 == 0){
        resultP+=i;
    }else if(i%2 != 0){
        resultI+=i;
    }
    console.log(i);
}
console.log(`La suma de los numeros pares en: ${resultP}`);
console.log(`La suma de los numeros impares en: ${resultI}`);