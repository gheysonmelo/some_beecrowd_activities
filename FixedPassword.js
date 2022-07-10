var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const senha = 2002; 
var valor = 0;

while(valor != senha) { 
    valor = parseInt(lines.shift());
    if(valor == senha) {
         console.log("Acesso Permitido"); 
    } else {console.log("Senha Invalida"); 
} 
}