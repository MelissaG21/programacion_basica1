//<>
var readline = require('readline'); 

var rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 

}); 

function romanize(n) {
	var
		values = [1, 5, 10, 50, 100, 500, 1000],
		letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
		res = [],
		num, letra, val, pos, insert

	for(var i = 6; num = values[i], letra = letras[i]; i--) {
		if(n >= num) {
			var r = Math.floor(n / num); 
			n -= r * num; 
			if(r < 4){
				while(r--){
					res.push(letra);
				}
			} else {
				val = res.pop(); 
				pos = (val ? letras.indexOf(val) : i) + 1; 
				insert = letra + (letras[pos] || 'M'); 
				res.push(insert);
			}
		} else {
			res.push('');
		}
	}
	return res.join('');
}


rl.question("Ingrese un numero menor de 5000 ", function(answer) { 
    if(answer < 5000 && answer > 0){
        console.log("Numero romano: "+ romanize(answer));
    }else{
        console.log("Cometio un error");
    }
    rl.close(); 
});