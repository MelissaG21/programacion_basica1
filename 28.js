function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

console.log("Se lanza una moneda al aire");
if(getRandomInt(0, 2) == 0){
    console.log("Cae cara");
}else{
    console.log("Cae cruz");
}