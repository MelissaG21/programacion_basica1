//<>
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

var numbers = new Array(4);
for (let i = 0; i< numbers.length; i++){
    numbers[i] = new Array(5);
}

    
for(let i=0; i<4; i++){
    for(let j=0; j<5; j++){
        numbers[i][j] = getRandomInt(1,101);
    }
}

console.log(numbers);