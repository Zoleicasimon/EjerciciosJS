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

//4. Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
//Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
//Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.


class Productos{
    constructor(codigo,nombre, precio){
        this.codigo=codigo || 1;
        this.nombre=nombre || 'A';
        this.precio=precio || 1;
    }

    imprimirDatos(){
        console.log(`El producto codigo : ${this.codigo}, es un:   ${this.nombre}, cuyo precio es: ${this.precio}`)
    };
    }

  const Producto1=new Productos(1, 'Televisor', 100000);
  Producto1.imprimirDatos();

 const array=[new Productos(1, 'Televisor', 100000), 
              new Productos(2, 'Televisor', 100020),
              new Productos(3, 'Televisor', 100300)];
            
 console.log(array.length);

 //1 forma de recorrer array de objetos
 /*for (const Productos of array) {
    Productos.imprimirDatos();
};*/

//2 forma de recorrer bucle de objetos
for(i=0; i<array.length; i++){
array[i].imprimirDatos();
}


/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones*/


class Person{
    constructor(nombre, edad, dni,sexo, peso, altura, añoNacimiento){
        this.nombre=nombre || null;
        this.añoNacimiento=añoNacimiento|| 1;
        this.edad=edad ||1;
        this.dni=dni||1;  
        this.sexo= sexo || null ;
        this.peso= peso || 1;
        this.altura=altura ||1;
        
    }


    mostrarGeneracion(añoNacimiento){
        let generacion='';

        if(this.añoNacimiento>=1994 && this.añoNacimiento<=2010){
           generacion='Pertenece a la generación z: IRREVERENCIA';
        }else if(this.añoNacimiento>=1981 &&  this.añoNacimiento<=1993){
            generacion='Pertene a la generacion Y milennia: FRUSTRACION';
        }else if(this.añoNacimiento>=1969 && this.añoNacimiento<=1989){
          generacion='Pertene a la generacion X: OBSESION POR EL EXITO';
        }else if(this.añoNacimiento>=1949 &&  this.añoNacimiento<=1968){
           generacion='Pertene a la Baby Boom: AMBICION';
        }else if(this.añoNacimiento>=1930 && this.añoNacimiento<=1948){
           generacion='Pertene a la generacion Silent Generation: AUSTERIDAD';
        }else{
                generacion='Su fecha no aparece';
            }
       return generacion
}
   esMayorDeEdad(edad){
    let mayorEdad=''
    if(this.edad>18){
        mayorEdad='Usted es mayor de edad'}
        else {
           mayorEdad='Usted es menor de edad';
        }
        return console.log (mayorEdad);
    }


    generarDNI() {
        this.dni = Math.floor(Math.random() * 1000000000) + 100000000;
        console.log('Su dni es: ', this.dni);
    }

    mostrarDatos(){
        console.log(`A continuacion se muestra su informacion: su nombre es: ${this.nombre}, cuyo dni es ${this.dni}, tiene ${this.edad} años, por lo que, ${this.esMayorDeEdad()} es de sexo ${this.sexo}, su año de nacimiento es en ${this.añoNacimiento} por lo que ${this.mostrarGeneracion()}, y su altura y peso son ${this.altura} y ${this.peso} respectivamente`)
    }
   }
    
   const persona1=new Person('Zoleica', 14, null, 'femenino', 54, 154, 1989);
   persona1.esMayorDeEdad();
   persona1.generarDNI();
   persona1.esMayorDeEdad();
   persona1.mostrarGeneracion();
  // persona1.mostrarDatos();  


  /*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas*/



class Libro{
    constructor(isbn, titulo, autor, numeroDePag){
        this.isbn=isbn;
        this.titulo=titulo;
        this.autor=autor;
        this.numeroDePag=numeroDePag;
    }

  get ISBN(){
    return this.isbn;
  }

  set ISBN(newisbn){
    this.isbn=newisbn;
  }

  get TITULO(){
    return this.titulo;
  }

  set TITULO(newtitulo){
    this.titulo=newtitulo;
  }

  get AUTOR(){
    return this.autor;
  }

  set AUTOR(newautor){
    this.autor=newautor;
  }

  get PAGINA(){
    return this.numeroDePag;
  }

  set PAGINA(newnumeroDePag){
    this.numeroDePag=newnumeroDePag;
  }

 mostrarInformacion(){
    console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas  ${this.numeroDePag}`)
 }

}



const Libro1=new Libro(123,'Biodiversidad', 'Zoleica', 300);
Libro1.mostrarInformacion();
/*Libro1.AUTOR='Juan';
console.log(Libro1.AUTOR);
Libro1.mostrarInformacion();*/

const Libro2=new Libro(234,'Biologia', 'Rodrigo', 500);
Libro2.mostrarInformacion();


if(Libro1.numeroDePag>Libro2.numeroDePag){
    console.log(`El libro1 tiene mas numero de pagina ${Libro1.numeroDePag}`)
}else if (Libro1.numeroDePag<Libro2.numeroDePag){
    console.log(`El libro2 tiene mas numero de pagina ${Libro2.numeroDePag}`)
}