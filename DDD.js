var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var DDD = parseInt(lines[0]);

var Brasilia = 61;
var Salvador = 71;
var SaoPaulo = 11;
var RioDeJaneiro = 21;
var JuizDeFora = 32;
var Campinas = 19;
var Vitoria = 27;
var BeloHorizonte = 31;

switch (DDD) {
    case Brasilia:
        console.log("Brasilia")
        break;
    case Salvador:
        console.log("Salvador")
        break;
    case SaoPaulo:
        console.log("Sao Paulo")
        break;
    case RioDeJaneiro:
        console.log("Rio de Janeiro")
        break;
    case JuizDeFora:
        console.log("Juiz de Fora")
        break;
    case Campinas:
        console.log("Campinas")
        break;
    case Vitoria:
        console.log("Vitoria")
        break;
    case BeloHorizonte:
        console.log("Belo Horizonte")
        break;
    default:
        console.log(`DDD nao cadastrado`);
    }