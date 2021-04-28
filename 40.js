function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function generarVentas(numP, sellers) {
    let products = [];
    for (let i = 0; i < numP; i++) {
        products.push([]);
        for (let j = 0; j < 12; j++) {
            products[i].push([]);
            let sales = getRandomInt(1,6);
            for (let k = 0; k < sales; k++) {
                products[i][j].push({
                    seller: sellers[getRandomInt(1, sellers.length)],
                    sale: getRandomInt(1,150)
                });
            }
        }
    }
    return products;
}

let meses = [
    'Enero', 
    'Febrero',
    'Marzo', 
    'Abril', 
    'Mayo',
    'Junio', 
    'Julio', 
    'Agosto',
    'Septiembre', 
    'Octubre',
    'Noviembre', 
    'Diciembre'
];

let sellers = [
            'Pancho', 
            'Torres', 
            'Marta'];
let sales = generarVentas(4, sellers);

sales.forEach((product, index) => {
    console.log(`Ventas producto ${index}`);
    product.forEach((mes, index) => {
        let total = mes.reduce((acc, current) => {
            return acc + current.sale
        }, 0);
        console.log(`${meses[index]} : ${total}`);
    });
    console.log('\n');
});