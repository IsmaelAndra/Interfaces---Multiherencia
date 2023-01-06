"use strict";
class Camion {
    constructor() {
        this.numero_Llantas = 6;
        this.modelo = 2022;
        this.fabricante = "Casa Vaca";
    }
    conducir() {
        console.log("El vehiculo está siendo conducido");
    }
    ;
    encender() {
        console.log("El vehiculo está encendido");
    }
    ;
    acelerar() {
        console.log("El vehiculo está acelerando");
    }
    ;
    frenar() {
        console.log("El vehiculo está frenando");
    }
    apagar() {
        console.log("El vehiculo está apagado");
    }
    cargar() {
        console.log("El camión está cargando");
    }
}
function procesar(vehiculo) {
    vehiculo.encender();
    vehiculo.conducir();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}
let camion = new Camion();
console.log("Número de Llantas: " + camion.numero_Llantas);
console.log("Modelo: " + camion.modelo);
console.log("Fabricante: " + camion.fabricante);
camion.conducir();
camion.acelerar();
camion.frenar();
camion.apagar();
camion.encender();
camion.cargar();
// class Camioneta implements Vehiculo_Terrestre {
// }
// class Atomovil implements Vehiculo_Terrestre {
// }
// class yate implements Vehiculo_Maritimo {
// }
// class Velero implements Vehiculo_Maritimo {
// }
// class Avion implements Vehiculo_Aereo {
// }
// class Avioneta implements Vehiculo_Aereo {
// }
