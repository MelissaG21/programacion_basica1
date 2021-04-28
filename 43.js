const fs = require('fs');
const readline = require('readline');

function objeto(obj,atr, value){
    switch (atr){
        case 'name':
            obj.name = value;
            break;
        case 'last name':
            obj.lastName = value;
            break;
        case 'direction':
            obj.direction = value;
            break;
        case 'state':
            obj.state = value;
        default:
            throw 'No atribute found';
    }
}
let map = new Map();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fr = readline.createInterface({
    input: fs.createReadStream('./DATOS.DAT'),
    crlfDelay: Infinity
});

fr.on('line', (line) => {
    let obj = JSON.parse(line);
    map.set(obj.id, obj);
    fr.close();
}).on('close',()=>{
    rl.question("Ingrese la id que se desea modificar ", (answer) => {
        let data = answer.split(',');
        objeto(map.get(data[0]),data[1].toLowerCase(),data[2]);
        for (c of map.values()) {
            fs.writeFileSync('./DATOS.DAT', JSON.stringify(c));
        }
        rl.close();
    });
});

/*
De los ejercicios del 41 al 45 me base en ejemplos que 
encontre en internet ya que no me salieron y me parecieron muy dificiles:c
*/