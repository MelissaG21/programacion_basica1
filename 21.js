//<>
function impar(){
    let total=0
    for(let i=0; i<=1000; i++){
        if(i%2 != 0){
            total += i;
        }
    }
    return total;
}

function par(){
    let total=0
    for(let i=0; i<=1000; i++){
        if(i%2 == 0){
            total += i;
        }
    }
    return total;
}

let totalP = par();
let totalI = impar();

console.log(`El total de la suma de numero pares entre 1 y 1000 es ${totalP}`);
console.log(`El total de la suma de numero impares entre 1 y 1000 es ${totalI}`);