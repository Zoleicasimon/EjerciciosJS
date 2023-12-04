console.log('Estamos en EJERCICIOS TP2')

/*//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
let edad=parseInt(prompt('Ingrese su edad'))

if (edad>18){
    console.log('Usted ya puede conducir');
    document.write('Usted ya puede conducir');
}else{
    alert('no es un numero indicado');
}

/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

let nro;

do {
    nro = parseInt(prompt('Ingrese su nota'));
    
    if (nro>10) {
        alert('Introduce un número válido');
    }
   } while (nro>10) ;

if(nro>=0 && nro<=10){
 if(nro>=0 && nro<=2){
    alert('Su nota es muy deficiente'); 
} else if(nro>2 &&  nro<6){
    alert('Su nota es muy insuficiente');
} else if(nro>4 && nro<7){
     alert('Su nota es suficiente');
}else if(nro>6 && nro<8){
    alert('Su nota es bien');
}else if(nro>7 && nro<=9){
    alert('Su nota es notable');
}else if(nro=10){
    alert('Su nota es sobresaliente');
}
}*/

//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.


/*let cadenaTexto;
let continuation;
let textoConcatenado=('');


do {
cadenaTexto=prompt('Ingrese una oracion');
continuation=prompt('¿Desea continuar? true or false');

textoConcatenado+=' '+cadenaTexto+ '-';
}
while (continuation==='true');

if(continuation!=='true'){
console.log('Su cadena de texto es: ', textoConcatenado);
document.write('</br>'+'Su cadena de texto es: ', textoConcatenado);
}*/

/*otra opcion*/

let cadenaTexto1;
let continuation1;
let textoConcatenado1=('');

do {
    cadenaTexto1=prompt('Ingrese una oracion');
    continuation1=confirm("Quiere ingresar otro texto")
    textoConcatenado1+=' '+cadenaTexto1+'-';
    }
    while (continuation1===true);
    
    if(continuation1===false){
    document.write('su cadena de texto es: ', textoConcatenado1.slice(0,-1));    
    }
    
//4 Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

/*let numero;
let suma=0;
let respuesta;

do {
 numero=parseInt(prompt('Ingrese un numero'));
 
 while (isNaN(numero)===true){ 
    alert('¡Error! Por favor, ingrese un número válido');
    numero=parseInt(prompt('Ingrese un numero'));
}  

 if (isNaN(numero)===false){
 suma=suma+numero; 
 respuesta=confirm('¿Desea continuar?');

 }

}while(respuesta===true);

if(!respuesta){
    console.log('La suma total es: ', suma);
    document.write('La suma total es: ', suma);
};*/

/*5.Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/

/*let resto;
let arrayOriginal=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; 
let respuesta;

do{
let dni=parseInt(prompt('Ingrese su DNI'));

while(isNaN(dni)===true || dni<=0 || dni>99999999){
    alert('Ingrese correctamente su dni');
    dni=parseInt(prompt('Ingrese su DNI'));
}

if(isNaN(dni)===false && dni>=0 && dni<=99999999){
  resto=dni%23;
  console.log(resto, 'Su dni corresponde a la letra', arrayOriginal[resto]);
}
respuesta=confirm('¿Desea averiguar otro DNI?')

}while(respuesta===true);

if(!respuesta){
    console.log('Agradecemos su visita');

}*/

/*6. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666*/

/*let i, rep;
// BUCLE FOR PARA RECORRER DE 1 A 30//recorre verticalmente
for (i = 1; i <= 30; i++) { 
    // BUCLE INTERIOR PARA HACER LAS REPETICIONES//recorre horizontamente
    for (rep = 0; rep < i; rep++) {
        // IMPRIMIMOS EL NÚMERO i, i VECES
        document.write(i);
    }
    // IMPRIMIMOS UN SALTO DE LÍNEA
    document.write("<br>");
}

//

/*7. 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30)*/


/*let nro=parseInt(prompt('Ingrese un numero'));
let i,j;


while(nro>=30){
    alert('Su numero se excede al valor requerido');
    nro=parseInt(prompt('Ingrese un numero'));
}
   
for (i=nro; i>=1; i--){
    for(j=0; j<i; j++){
        console.log(i);
        document.write(i);
    }

    document.write('</br>');
}
*/
//8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

/*let nro1=parseInt(prompt('Ingrese un numero'));
let cadena=''
let suma=0
while(nro1>=50) {
    alert('Su numero se excede al valor requerido');
    nro1=parseInt(prompt('Ingrese un numero'));
}

do {
    document.write(cadena+=(suma=suma+1));
    document.write('</br>');
}while(suma<nro1);*/

//9. Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

/*let suma=0;

do {
    document.write(suma=suma+1);
    if(suma%5===0){
        document.write('</br>'+'------------------');
    }else if(suma%4===0){
        document.write(' el numero es multiplo de 4');
    }else if(suma%9===0){
        document.write(' el numero es multiplo de 9');
    }
    document.write('</br/>');
}while(suma<500);*/

//10. Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

/*let filas=parseInt(prompt('Ingrese el numero de filas'));
let columnas=parseInt(prompt('Ingrese el numero de columnas'));
let tamanoTabla=(filas*columnas);
let i,j,k

for(i=0; i<filas; i++){
    
    for(j=0; j<columnas; j++){
        document.write( tamanoTabla--, '|');
    
    }
       document.write('</br>');
   }*/

   /*let filas = parseInt(prompt('Ingrese el número de filas'));
   let columnas = parseInt(prompt('Ingrese el número de columnas'));
   let tamanoTabla = filas * columnas;
   let i, j;
   
   document.write('<table>');
   
   for (i = 0; i <filas; i++) {
       document.write('<tr>');
       
       for (j = 0; j < columnas; j++) {
           document.write('<td>' + tamanoTabla-- + '</td>');
       }
   
       document.write('</tr>');
   }
   
   document.write('</table>');*/


//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

/*let contador=0;
let arrayEdad=[];
let arrayNombre=[];
do{
    let edad=parseInt(prompt('Ingrese su edad'));
    let nombre=prompt('Ingrese su nombre');
    arrayEdad.push(edad);
    arrayNombre.push(nombre);
    contador++;
}while(contador<3);

let maxima=Math.max(...arrayEdad);
let position=arrayEdad.indexOf(maxima);


document.write('La persona con mayor edad es:', arrayNombre[position], 'y tiene', maxima);
console.log(arrayEdad);
console.log(arrayNombre);
console.log(maxima);*/

//12. Realiza un script que genere un número aleatorio entre 1 y 99

/*let aleatorio=Math.ceil(Math.random() * (100 - 0));

console.log(aleatorio);

//13. Realiza un script que pida un texto y lo muestre en mayúsculas.
/*let texto=prompt('Ingrese un texto');
let mayuscula=texto.toUpperCase();

document.write('Su texto en mayuscula es: ', mayuscula);*/

//14. Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

/*let oracion=prompt('Ingrese su oracion');
let longitud=oracion.length;
let i;
let cadena='';

for(i=0; i<longitud; i++){
    let subcadena=oracion.charAt(i);
    document.write(subcadena, ' - ',);
}*/

//15. Realiza un script que cuente el número de vocales que tiene un texto.

/*let texto2=prompt('Ingrese un texto');
let longitud2=texto2.length;
let index;
let contador=0;

for(index=0; index<longitud2; index++){
let vocal=texto2.charAt(index);
if (vocal==='a' ||  vocal==='e' || vocal==='i' || vocal==='o' || vocal==='u'){
    contador=contador+1;
    console.log(contador);
}

}
document.write('El numero de vocales que tiene su oracion', texto2, ' son: ' , contador);*/

//16. Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”

/*let texto3=prompt('Ingrese su texto');
let longitud3=texto3.length;
let index2;

for(index2=longitud3-1; index2>=0; index2--){
    let letra=texto3.charAt(index2);
    document.write(letra);
}*/
  

//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

/*let texto = prompt('Ingrese tu texto');
let posicion;

for (let i = 0; i < texto.length; i++) {
    let caracter = texto.charAt(i); // Convertir a minúscula para hacer la comparación sin distinción de mayúsculas/minúsculas

    if ('aeiou'.includes(caracter)) {
        posicion = i + 1; // Sumar 1 porque las posiciones comienzan desde 1 en lugar de 0
        break; // Salir del bucle cuando se encuentra la primera vocal
    }
}


    console.log('La primera vocal está en la posición: ' + posicion);*/
