console.log('Estamos en EJERCICIOS TP2')

//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
/*let edad=parseInt(prompt('Ingrese su edad'))

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

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.*/


let nro=parseInt(prompt('Ingrese su edad'))

if (nro>=0 && nro<=10){
    if(nro>=0 && nro<=2){
    alert('Su nota es muy deficiente'); 
} else if(nro>=3 ||  nro<5){
    alert('Su nota es muy insuficiente');
} else if(nro=5 || nro<=6){
     alert('Su nota es suficiente');
}else if(nro=7){
    alert('Su nota es bien');
}else if(nro=8 || nro<=9){
    alert('Su nota es notable');
}else if(nro=10){
    alert('Su nota es sobresaliente');
}
}else if (nro>10){
    console.log('Mensaje erroneo');
    while (nro>10)
    console.log('Ingrese numero correcto');
}
     
