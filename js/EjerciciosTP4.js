console.log('Estamos TP4');
//1. Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.


// Definir el objeto "auto"
/*let auto = {
    color: "rojo",
    marca: "Toyota",
    modelo: "Corolla",
    estaEncendido: false,

    // Método para encender el auto
  encender () {
        if (this.estaEncendido===false) {
            console.log("Encender el auto.");
        }else{
            console.log("El auto esta encendido");
        }      
    },

    apagar(){
        if(this.estaEncendido===true){
            console.log('Apagar el auto')
        }else{
            console.log('El auto esta apagado');
        }
    }
}

document.write('El auto es de color: ', auto.color);
auto.encender();

auto.estaEncendido=false
auto.encender();
auto.apagar();*/

/*2. 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta*/

/*const banco={
    titular:'Alex',
    saldo:500,


    ingresar(cantidad){
    this.saldo=this.saldo+cantidad;
    },


    extraer(cantidad){
    this.saldo=this.saldo-cantidad;
   },

    informar(){
       return this.saldo;
            },
    }

 alert('La cuenta actual del tiular: ' + banco.titular +  ' es: ' + banco.saldo);  
//si quiero que el usuario ingrese se crea otro algoritmo

let cantidad;
let respuesta;

do{ 

cantidad = parseInt(prompt('Ingrese la cantidad a depositar'));
banco.ingresar(cantidad);  
respuesta=confirm('¿Desea ingresar mas dinero?');

}while(respuesta===true);


document.write('La cuenta actualizada del tiular',  banco.titular, ' es :' + banco.informar());*/


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
    document.write('</br>');
}while(suma<500);*/


//3. Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class DistintosRectangulos {
    constructor(alto, ancho) {
        this.alto = alto || 2; //si coloco igual a 2 siempre se imprime y calcula todo en base a ese valor
        this.ancho =ancho|| 10;
    }

    perimetro() {
        return 2 * (this.alto + this.ancho);
    }

    area() {
        return this.alto * this.ancho;
    }

    mostrarPropiedades() {
        console.log('Alto:', this.alto);
        console.log('Ancho:', this.ancho);
    }
}


let alto=parseInt(prompt('Ingrese el alto'));
let ancho=parseInt(prompt('Ingrese el ancho'));

// Crear un objeto1 de la clase DistintosRectangulos
const miRectangulo = new DistintosRectangulos(alto,ancho);

// Mostrar propiedades del rectángulo Mio
miRectangulo.mostrarPropiedades();

// Calcular y mostrar área y perímetro
console.log('El Área del rectangulo es:', miRectangulo.area());
console.log('El Perímetro del rectangulo es:', miRectangulo.perimetro());

/* Crear un objeto2 de la clase DistintosRectangulos

const miRectangulo2 = new DistintosRectangulos(2, 3);

// Mostrar propiedades del rectángulo Mio
miRectangulo2.mostrarPropiedades();

// Calcular y mostrar área y perímetro
console.log('Área:', miRectangulo2.area());
console.log('Perímetro:', miRectangulo2.perimetro());*/

