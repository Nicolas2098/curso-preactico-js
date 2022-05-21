const letras = ['a','b','c'];

const newLetras = letras.map(item => item);
newLetras[1] = 'h';
letras[2] = 'm';

console.log('original - ' , letras);
console.log('new - ' , newLetras);