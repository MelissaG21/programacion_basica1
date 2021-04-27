let contador=0;
for(let i=1; i<=100; i++){
    if(i%2 == 0 || i%3 == 0){
        console.log(i);
        contador+=1;
    }
}
console.log(`El total de numeros multiplos del 2 o del 3, del uno al cien son: ${contador}`);