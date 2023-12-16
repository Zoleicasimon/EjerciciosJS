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

/*class DistintosRectangulos {
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

class biblioteca{
    constructor(){
        this.repositorio=[];
    }

agregarLibro(libro){
    this.repositorio.push(libro);
    console.log('Agrego su libro correctamente');
}    

masHojas() {
    if (this.repositorio.length === 0) {
        console.log('La biblioteca está vacía.');
    } else if (this.repositorio.length === 1) {
        console.log('Solo ingresó un libro, ingrese otro para comparar.');
    } else {
        let libroConMasPaginas = this.repositorio[0].numeroDePag;

        for (let i = 1; i < this.repositorio.length; i++) {
            if (this.repositorio[i].numeroDePag > libroConMasPaginas) {
                libroConMasPaginas = this.repositorio[i];
            }
        }
        console.log(`El libro con mas paginas es: ${libroConMasPaginas.titulo} y tiene ${libroConMasPaginas.numeroDePag} paginas`);
    }
}
    mostrarInformacion(){
        let src=''
        for (let i = 0; i < this.repositorio.length; i++) {
        src+=this.repositorio[i];
        return src
       ;
  }
  }
  mostrarInformacion() {
    for (let i = 0; i < this.repositorio.length; i++) {
        let libros = this.repositorio[i];
        console.log(libros.mostrarInformacion());
    }
}
}


const PrimerLibro=new biblioteca;

do {
    let listaFinal;
    let isbn1 = parseInt(prompt('Ingrese el ISBN'));
    let titulo1 = prompt('Ingrese el titulo');
    let autor1 = prompt('Ingrese el autor');
    let numeroDePag1 = parseInt(prompt('Ingrese la cantidad de paginas'));
    const Libros = new Libro(isbn1, titulo1, autor1, numeroDePag1);
    PrimerLibro.agregarLibro(Libros);
    Libros.mostrarInformacion();


} while (confirm('Quiere ingresar otro libro?'));

PrimerLibro.mostrarInformacion();
PrimerLibro.masHojas();

;
/*Libro1.AUTOR='Juan';
console.log(Libro1.AUTOR);
Libro1.mostrarInformacion()

const Libro2=new Libro(234,'Biologia', 'Rodrigo', 500);
Libro2.mostrarInformacion();


if(Libro1.numeroDePag>Libro2.numeroDePag){
    console.log(`El libro1 tiene mas numero de pagina ${Libro1.numeroDePag}`)
}else if (Libro1.numeroDePag<Libro2.numeroDePag){
    console.log(`El libro2 tiene mas numero de pagina ${Libro2.numeroDePag}`)
}*/
/*User
class Persona {
  constructor(nombre, apellido, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
  }

  mostrarInformacion() {
    return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, DNI: ${this.dni}`;
  }
}

class Mentor extends Persona {
  constructor(nombre, apellido, dni, materia) {
    super(nombre, apellido, dni);
    this.materia = materia;
    this.rol = "Mentor";
  }

  mostrarInformacion() {
    return `Rol: ${this.rol}, Apellido: ${this.apellido}, Nombre: ${this.nombre}, DNI: ${this.dni}, Materia: ${this.materia}`;
  }
}

class Alumno extends Persona {
  constructor(nombre, apellido, dni, curso, becado) {
    super(nombre, apellido, dni);
    this.rol = "Alumno";
    this.curso = curso;
    this.becado = becado;
  }

  mostrarInformacion() {
    return `Rol: ${this.rol}, Becado: ${this.becado}, Apellido: ${this.apellido}, Nombre: ${this.nombre}, DNI: ${this.dni}, Curso: ${this.curso}`;
  }
}

class Sistema {
  constructor() {
    /*const lsValue=localStorage.getItem('almacenamiento');
    if (lsValue!==null) {
      const array=JSON.parse(lsValue);
      this.almacenamiento = array;
      console.log(this.almacenamiento);
    }else{
      this.almacenamiento=[]
    }
    this.almacenamiento=JSON.parse(localStorage.getItem('almacenamiento')) || [];
  
  existeUsuario(usuario) {
    const exist = this.almacenamiento.find(
      (element) => element.dni === usuario.dni
    );
    if (exist !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  existeUsuarioPorDNI(dni){
    const prueba=(element)=>element.dni===dni;
    const exist=this.almacenamiento.some(prueba);
    return exist;
  }

  crearMentor(mentor) {
    if (this.existeUsuario(mentor)) {
      console.log("El usuario ya existe");
    } else {
      this.almacenamiento.push(mentor);
      console.log('Exito se creo el registro');
    }
  }

  crearAlumno(alumno) {
    if (this.existeUsuario(alumno)) {
      console.log("El usuario ya existe");
    } else {
      this.almacenamiento.push(alumno);
      console.log('Exito se creo el registro');
    }
  };

  mostrarInformacion(object){
    let str='';
    for (const key in object) {
     str+=` ${key.toUpperCase()}: ${object[key]} `
    }
    return str;
  }

  listarTodo(){
    if (this.almacenamiento.length===0) {
        console.log('Aun no existen registros');
    }else{        
        this.almacenamiento.forEach((element, index)=>{
            //console.log(`${index+1}: ${element.mostrarInformacion()}`);
            console.log(`${index+1}: ${this.mostrarInformacion(element)}`);
        });
    }
  };

  listarMentor(){
    const mentores=this.almacenamiento.filter((element)=>element.rol==='Mentor');
    if (mentores.length>0) {
        mentores.forEach((element, index)=>{
            console.log(`${index+1}: ${this.mostrarInformacion(element)}`);
        })
    }else{
        console.log('Aun no hay registros de MENTORES');
    }
  };

  listarAlumnos(){
    const alumnos=this.almacenamiento.filter((element)=>element.rol==='Alumno');
    if (alumnos.length>0) {
        alumnos.forEach((element, index)=>{
            console.log(`${index+1}: ${this.mostrarInformacion(element)}`);
        })
    }else{
        console.log('Aun no hay registros de ALUMNOS');
    }
  };


  eliminarRegistro(dni){
    const almacenamientoActualizado=this.almacenamiento.filter((element)=>element.dni!==dni);
    if (almacenamientoActualizado.length>0) {
      this.almacenamiento=almacenamientoActualizado;  
    }
    
  }




};


const system=new Sistema();

do {
    let opcion=parseInt(prompt('Seleccione una opcion, 1-CREAR MENTOR, 2-CREAR ALUMNO, 3-LISTAR TODO, 4-LISTAR MENTORES, 5-LISTAR ALUMNOS, 6-ELIMINAR UN RESGISTRO'));

    switch (opcion) {
        case 1:
            let nombreM=prompt('Ingrese el nombre');
            let apellidoM=prompt('Ingrese el apellido');
            let dniM=prompt('Ingrese el dni');
            let materiaM=prompt('Ingrese la materia');
            const mentor=new Mentor(nombreM, apellidoM, dniM, materiaM);
            system.crearMentor(mentor);
            break;
        case 2:
            let nombreA=prompt('Ingrese el nombre');
            let apellidoA=prompt('Ingrese el apellido');
            let dniA=prompt('Ingrese el dni');
            let cursoA=prompt('Ingrese el curso');
            let becadoA=confirm('Es becado si es si seleccione aceptar caso contrario cancelar');
            const alumno=new Alumno(nombreA, apellidoA, dniA, cursoA, becadoA);
            system.crearAlumno(alumno);
            break;
        case 3:
            system.listarTodo();
            break;
        case 4:
            system.listarMentor();
          break;    
        case 5:
          system.listarAlumnos();
          break;

        case 6:
          let dniBuscado=prompt('Por favor ingrese el DNI del registro que desea eliminar');
          const resultadoBusqueda=system.existeUsuarioPorDNI(dniBuscado);
          if (resultadoBusqueda) {
            const eleccionUsuario=confirm('¿Esta seguro de eliminar el registro?');
            if (eleccionUsuario) {
              system.eliminarRegistro(dniBuscado);
              console.log('Exito se elimino el registro deseado!');
            }
          } else {
            console.log('No se encontro el usuario.');
          }
          

          break;
        default:
            console.error(`OPCION INGRESADA INVALIDA: INGRESO--> ${opcion}`);
            break;
    }
} while (confirm('¿Desea continuar operando?'));


console.log('###Alamcenamiento-->',system.almacenamiento);

localStorage.setItem('almacenamiento',JSON.stringify(system.almacenamiento));*/