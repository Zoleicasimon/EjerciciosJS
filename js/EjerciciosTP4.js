console.log('Estamos TP4');
//1. Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.


// Definir el objeto "auto"
var auto = {
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
    },
}

document.write(auto.color);
auto.encender();

auto.estaEncendido=false
auto.encender();
auto.apagar();

