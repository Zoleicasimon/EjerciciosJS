console.log('Estamos en TP3');
//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

/*let arrayMeses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


console.log('Lista de meses');

document.write('<li>', arrayMeses[0], '</li>');
document.write('<li>', arrayMeses[1], '</li>');
document.write('<li>', arrayMeses[2], '</li>');
document.write('<li>', arrayMeses[3], '</li>');
document.write('<li>', arrayMeses[4], '</li>');
document.write('<li>', arrayMeses[5], '</li>');
document.write('<li>', arrayMeses[6], '</li>');
document.write('<li>', arrayMeses[7], '</li>');
document.write('<li>', arrayMeses[8], '</li>');
document.write('<li>', arrayMeses[9], '</li>');
document.write('<li>', arrayMeses[10], '</li>');
document.write('<li>', arrayMeses[11], '</li>');*/

/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/


/*let ciudades;
let array=[];
let confirmacion;

do{
   ciudades= prompt('Ingrese la ciudad que desea');
   array.push(ciudades); 
    
  confirmacion=confirm('Quiere ingresar otra ciudad???');

}while(confirmacion===true);
console.log(array);

let longArray=array.length;
console.log('La longitud de su array es: ', longArray);

document.write('<li>' + 'El elemento 1era posicion: ,',array[0] + '</li>',
'<li>'+'El elemento 2da posicion: ,',array[2],'</li>',
'<li>'+'El elemento 3era posicion: ,',array[longArray-1] + '</li>');

ciudades='Paris'
array.push(ciudades);
console.log(array);

document.write('El elemento que ocupa la posicion deos es: ', array[1]);

array[2]='Barcelona';
   
document.write('<li>' + 'El elemento 1era posicion: ,',array[0] + '</li>',
'<li>'+'El elemento 2da posicion: ,',array[2],'</li>',
'<li>'+'El elemento 3era posicion: ,',array[3] + '</li>', '<li>'+'El elemento 4ta posicion: ,',array[longArray-1] + '</li>');*/

//Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

/*let nroDado1,nroDado2;
let cantidad=0;
let i,j,suma;
let array=[];
let valor1=0;
let valor2=0;
let valor3=0;
let valor4=0;
let valor5=0;
let valor6=0;
let valor7=0;
let valor8=0;
let valor9=0;
let valor10=0;
let valor11=0;
let valor12=0;


for(i=0; i<50; i++){
    nroDado1=Math.ceil(Math.random()*6);
    nroDado2=Math.ceil(Math.random()*6);
    suma=nroDado1+nroDado2;
    array.push(suma);
    cantidad=cantidad+1;
    suma=0;
}

let longArray2=array.length
console.log(array);

for(j=0; j<longArray2; j++){
    if(array[j]===2){
     valor2=valor2+1;
    
}else
     if(array[j]===3){
     valor3=valor3+1;
   
}else
    if(array[j]===4){
        valor4=valor4+1;
        
}else
    if(array[j]===5){
    valor5=valor5+1;
 
}else
    if(array[j]===6){
    valor6=valor6+1;

}else
    if(array[j]===7){
        valor7=valor7+1;
   
    }else
if(array[j]===8){
valor8=valor8+1;

}else
if(array[j]===9){
   valor9=valor9+1;
   

}else
if(array[j]===10){
valor10=valor10+1;


}else
if(array[j]===11){
valor11=valor11+1;


}else
if(array[j]===12){
   valor12=valor12+1;
   
}
}



document.write('<table>');
document.write('<thead>');
document.write('<tr>');
document.write('<th>'+'SUMA_DADOS'+'</th>')
document.write('<th>'+'VECES_REPETIDAS'+'</th>')
document.write('</tr>');
document.write('</thead>')

document.write('<tbody>');
document.write('<tr>');
document.write('<td>'+'<br/>'+'2'+ '</td>')
document.write('<td>'+'<br/>'+valor2+ '</td>')
document.write('</tr>');


document.write('<tr>');
document.write('<td>'+'<br/>'+'3'+ '</td>')
document.write('<td>'+'<br/>'+valor3+ '</td>')
document.write('</tr>');


document.write('<tr>');
document.write('<td>'+'<br/>'+'4'+ '</td>')
document.write('<td>'+'<br/>'+valor4+ '</td>')
document.write('</tr>');


document.write('<tr>');
document.write('<td>'+'<br/>'+'5'+ '</td>')
document.write('<td>'+'<br/>'+valor5+ '</td>')
document.write('</tr>');


document.write('<tr>');
document.write('<td>'+'<br/>'+'6'+ '</td>')
document.write('<td>'+'<br/>'+valor6+ '</td>')
document.write('</tr>');


document.write('<tr>');
document.write('<td>'+'<br/>'+'7'+ '</td>')
document.write('<td>'+'<br/>'+valor7+ '</td>')
document.write('</tr>');


document.write('<tr>');
document.write('<td>'+'<br/>'+'2'+ '</td>')
document.write('<td>'+'<br/>'+valor8+ '</td>')
document.write('</tr>');


document.write('<tr>');
document.write('<td>'+'<br/>'+'9'+ '</td>')
document.write('<td>'+'<br/>'+valor9+ '</td>')
document.write('</tr>');


document.write('<tr>');
document.write('<td>'+'<br/>'+'10'+ '</td>')
document.write('<td>'+'<br/>'+valor10+ '</td>')
document.write('</tr>');


document.write('<tr>');
document.write('<td>'+'<br/>'+'11'+ '</td>')
document.write('<td>'+'<br/>'+valor11+ '</td>')
document.write('</tr>');


document.write('<tr>');
document.write('<td>'+'<br/>'+'12'+ '</td>')
document.write('<td>'+'<br/>'+valor12+ '</td>')
document.write('</tr>');


document.write('</tbody>');



//me tiraba chat gtp pero no entendi
/*let nroDado1, nroDado2;
let array = [];
let valores = new Array(11).fill(0);


for (let i = 0; i < 50; i++) {
    nroDado1 = Math.ceil(Math.random() * 6);
    nroDado2 = Math.ceil(Math.random() * 6);
    let suma = nroDado1 + nroDado2;
    array.push(suma);
    valores[suma - 2]++;
}

let tablaResultados = document.getElementById('resultados').getElementsByTagName('tbody')[0];

for (let i = 2; i <= 12; i++) {
    let fila = tablaResultados.insertRow();
    let celdaSuma = fila.insertCell(0);
    let celdaApariciones = fila.insertCell(1);

    celdaSuma.textContent = i;
    celdaApariciones.textContent = valores[i - 2];
}*/

//4.Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

/*let parametro = parseInt(prompt('Ingrese un numero'));
parImpar(parametro);

function parImpar(parametro) {
    if (parametro % 2 === 0) {
        document.write('El número es par');
    } else {
        document.write('El número es impar');
    }
}*/

//5. Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.


/*do{
    let texto=prompt('Ingrese su texto');
    cadenatexto(texto);
    confirmacion=confirm('¿Quiere averiguar otra palabra?')

}while(confirmacion===true)

//FUNCION EXPRESION REGULAR
function cadenatexto(texto){
    if(/^[A-Z]+$/.test(texto)){
 console.log('Texto tiene mayuscula');   
}else
    if(/^[a-z]+$/.test(texto)){
     console.log('Texto tiene minuscula')
}else 
    if(/[a-z]/.test(texto) && /[A-Z]/.test(texto))
    console.log('Texto tiene mayusculas y minuscula')
return;
}
*/

//6.  Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

//La fórmula del perímetro  es p = 2*(a +b)


/*do{
    let ladoCorto=parseInt(prompt('Ingrese el valor de los segmentos mas cortos del rectangulo'));
    let ladoLargo=parseInt(prompt('Ingrese el valor de los segmentos mas largos del rectangulo'));
    
    let resultado=perimetroRectangulo(ladoCorto,ladoLargo)
    document.write('</br>'+'el perimetro de su rectangulo es: ', resultado);

    confirmacion=confirm('¿Quiere averiguar otro perimetro?');

}while(confirmacion===true)



function perimetroRectangulo(ladoCorto,ladoLargo){
   return perimetro=(2*(ladoCorto +ladoLargo));*/


//7. Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

let numero=parseInt(prompt('Ingrese un numero cuya tabla de multiplicar desee conocer'));
multiplicarTabla(numero);


function multiplicarTabla(numero){
let i;
let resultado
    for (i=0; i<=10; i++){
    document.write('<table>');    
    document.write('<tr>');
    document.write('<td>' + numero, 'X', i, '</td>');
    document.write('<td>' +(numero*i) + '</td>'); 
    document.write('<tr>');
    document.write('</table>'); 
}  
    

}
