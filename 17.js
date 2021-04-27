//<>
const bubbleSort = arr => {
    let l = arr.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arr[ j ] < arr[ j + 1 ] ) {
          [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
        }
      }
    }
  
    return arr;
};

function suma (arr) {
    let l = arr.length;
    let total=0;
    for(let i=0; i<l; i++){
        total+=arr[i];
    }
        
    return total
}

const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1, 31];
var result = bubbleSort(arr);
var l = arr.length;
var total = suma(arr);

console.log(result);
console.log(l);
console.log(total);
