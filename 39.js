let count = 0;
let str = ""
for(let i = 0; i < 3; i++){
    str += `Tabla pagina #${i+1}\n`;
    for(let j = 0; j < 4; j++){
        for(let k = 0; k < 5; k++){
            str += `${++count}\t`;
        }
        str += '\n';
    }
}

console.log(str);