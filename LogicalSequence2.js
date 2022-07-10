var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let  columns = parseInt(lines.shift());
let numMax = parseInt(lines.shift());

let cont = 0;
let str = "";
for (i = 1; i < numMax; i++){
    cont += 1;
    if (cont ==  columns) {
        cont = 0;
        str += `${i}\n`;
    }else{
        str += `${i} `;
    }
}
str += `${numMax}`;
console.log(str);