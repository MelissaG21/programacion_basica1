function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function matriz(m, n){
    let mat =  [];
    for(let i = 0; i < m; i++){
        mat.push([]);
        for(let j = 0; j < n; j++){
            mat[i][j] = getRandomInt(1,100);
        }
    }
    return mat;
}

console.log(matriz(9,1).sort((a,b) => {
    if(a[0] === b[0]) return 0;
    return (a[0] < b[0]) ? -1 : 1;
}));

