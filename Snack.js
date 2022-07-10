var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var X = parseInt(lines[0]);
var Y = parseInt(lines[1]);

var hotdog = 4;
var xsalad = 4.5;
var xbacon = 5;
var toast = 2;
var soda = 1.5;

switch (X) {
    case 1:
        X=hotdog;
        break;
    case 2:
        X=xsalad;
        break;
    case 3:
        X=xbacon;
        break;
    case 4:
        X=toast;
        break;
    case 5:
        X=soda;
        break;
    default:
      console.log(`Sorry.`);
  }
  

var total = X*Y;
console.log(`Total: R$ ${total.toFixed(2)}`);