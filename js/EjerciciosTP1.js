console.log('Estoy en EJERCITACION PARTE 1 ')
//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

alert('Un mensaje');

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write('Hello world');

//3.Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write('</br>'+'El resultado de sumar 3+5 es 8');

//4.Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

let usuario=prompt('Ingrese su usuario'); 
document.write('</br>'+ 'Hola su nombre de usuario es: ', usuario);

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//Nota: Tener en cuenta la siguiente función: parseInt

/*let numero1=parseInt(prompt('Ingrese un numero'));
let numero2=parseInt(prompt('Ingrese otro numero'));
console.log('La suma de sus numerosnes igual a: ',  numero1+numero2);
document.write('</br>'+'La suma de sus numerosnes igual a: ',  numero1+numero2);*/

//6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
//OPCION 1
/*let num1=parseInt(prompt('Ingrese un numero'));
let num2= parseInt(prompt('Ingrese otro numero'));
let maximum=Math.max(num1,num2);
console.log('el numero maximo ingresado es: ', maximum);

//OPCION2 NO SE PUEDE PEDIR EN ARRAY CON VARIOS PROMPT
let nro1=parseInt(prompt('Ingrese un numero'));
let nro2=parseInt(prompt('Ingrese otro numero'));
let array=[nro1,nro2];
let maximo=Math.max(...array);
console.log('el numero maximo ingresado es: ', maximo);
console.log(array);

//OPCION 3
let nro1=parseInt(prompt('Ingrese un numero'));
let nro2=parseInt(prompt('Ingrese otro numero'));
if (nro1>nro2){
    console.log('El numero mayor es: ', nro1 )
}else{
    console.log('El numero mayor es: ', nro2 )
}*/

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
//OPCION 1
/*let n1=parseInt(prompt('Ingrese un numero'));
let n2=parseInt(prompt('Ingrese otro numero'));
let n3=parseInt(prompt('Ingrese el ultimo numero'));
let array=[n1,n2, n3];
let max=Math.max(...array);
console.log('el numero maximo ingresado es: ', max);
console.log(array);*/

//OPCION 2
/*if((n1 && n2)<n3){
    console.log('el numero maximo ingresado es: ', n3);
    }else if((n1 && n3)<n2){
        console.log('el numero maximo ingresado es: ', n2);
    }else{
        console.log('el numero maximo ingresado es: ', n1);
    }*/

    
//8.- Escribe un programa que pida un número y diga si es divisible por 2

let number=parseInt(prompt('Ingrese un numero'));
let resultado=number%2

if (resultado===0){
    console.log('su numero es divisible en 2');
}else{
    console.log('su numero no es divisible en 2');
}

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

let frase=prompt('Ingrese una frase');
let longitud=frase.length;
let vocalesEncontradas = '';

for (let index=0; index<longitud; index++){
let a=frase.charAt(index);
  if(a==='a' |  a==='e' | a==='i' | a==='o' | a==='u'){
    vocalesEncontradas += a;
  
}
}
console.log(vocalesEncontradas);

//10.10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let a=parseInt(prompt('Ingrese un number'));

if(a%2===0){
    console.log('Su numero es divisible en dos');
}else if (a%3===0){
        console.log('Su numero es divisible en tres');
    }else if (a%5===0){
        console.log('Su numero es divisible en cinco');
}else if (a%7===0){
        console.log('Su numero es divisible en siete')
}

//11.Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numA=parseInt(prompt('Ingrese un number'));
let array=[] ;

if(numA%2===0){
    let b=array.push(2);
}
    if (numA%3===0){
        let c= array.push(3);
}
    if (numA%5===0){
    let d= array.push(5);
}
if(numA%7===0){
    let e=array.push(7);
}
console.log ('Su numero es divisible por: ', array);
document.write('Su numero es divisible por: ', array);