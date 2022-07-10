var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var alcohol = 0;
var gasoline = 0;
var diesel = 0;

for (i = 1; i <= lines.length; i++) {
    switch (parseInt(lines[i])) {
        case 1: alcohol++
        break;
        case 2: gasoline++
        break;
        case 3: diesel++
        break;
        case 4: console.log(`MUITO OBRIGADO
Alcool: ${alcohol}
Gasolina: ${gasoline}
Diesel: ${diesel}`)
        break;
    }
}