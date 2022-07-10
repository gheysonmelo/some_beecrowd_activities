var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);
var pi = 3.14159;

var rectangledTriangleArea = ((A*C)/2);
var circleArea = (pi*C*C);
var trapeziumArea = ((A+B)*C)/2;
var squareArea = (B*B);
var rectangleArea = (A*B);

console.log(`TRIANGULO: ${rectangledTriangleArea.toFixed(3)}
CIRCULO: ${circleArea.toFixed(3)}
TRAPEZIO: ${trapeziumArea.toFixed(3)}
QUADRADO: ${squareArea.toFixed(3)}
RETANGULO: ${rectangleArea.toFixed(3)}`);