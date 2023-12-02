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
textoConcatenado+=' '+cadenaTexto;
}
while (continuation==='true');

if(continuation!=='true'){
console.log('Su cadena de texto es: ', textoConcatenado);
document.write('</br>'+'Su cadena de texto es: ', textoConcatenado);
}*/

/*//otra opcion
let cadenaTexto1;
let continuation1;
let textoConcatenado1=('');

do {
    cadenaTexto1=prompt('Ingrese una oracion');
    continuation1=confirm("Quiere ingresar otro texto")
    textoConcatenado1+=' '+cadenaTexto1;
    }
    while (continuation1===true);
    
    if(!continuation1){
    document.write('su cadena de texto es: ', textoConcatenado1);    
    }*/
    
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


let nro=parseInt(prompt('Ingrese un numero'));
let i,j;

for (i=nro; i>=1; i--){
    for(j=0; j<i; j++){
        console.log(nro);
        document.write(i);
    }

    document.write('</br>');
}
