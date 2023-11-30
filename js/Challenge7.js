console.log('Estoy en challenge7');

//Obtener la base y la altura de un triangulo, y el radio de un circulo. Mostrar por consola el area del triangulo del circulo con un mensaje detallando cual es cual

let base=prompt('Ingrese el valor de la base de su triangulo');
let altura=prompt('Ingrese el valor de la altura de su triangulo');
let areatriangulo= (base * altura)/2;
const pi=3.14;
let radio=parseInt(prompt('Ingrese su radio'));

//et exponencial=Math.pow(radio, 2)
let areacirculo=pi*(Math.pow(radio, 2))
//let areacirculo= pi*exponencial;

console.log('Su area del triangulo es:', areatriangulo);
document.write('Su area del triangulo es:', areatriangulo);
console.log('Su area del circulo es:', areacirculo);
document.write('<br>'+ 'Su area del circulo es:', areacirculo);
