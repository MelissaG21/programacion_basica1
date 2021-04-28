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
console.log("Matriz normal: ");
console.log(numbers);

var numbers2 = new Array(5);
for (let i = 0; i< numbers2.length; i++){
    numbers2[i] = new Array(4);
}

for(let i=0; i<5; i++){
    for(let j=0; j<4; j++){
        numbers2[i][j]=numbers[j][i];
    }
}

console.log("Matriz transpuesta: ");
console.log(numbers2);