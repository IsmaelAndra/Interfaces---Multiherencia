interface Vehiculo {
    modelo: number;
    fabricante: string;
    encender(): void;
    acelerar(): void;
    frenar(): void;
    apagar(): void;
}

interface Vehiculo_Terrestre {
    numero_Llantas: number;
    conducir(): void;
    apagar(): void;
    frenar(): void;
    acelerar(): void;
    encender(): void;
}

interface Vehiculo_Maritimo {
    numero_Turbina: number;
    numero_Anclas: number;
    navegar(): void;
}

interface Vehiculo_Aereo {
    numero_helices: number;
    pilotar(): void;
}

class Camion implements Vehiculo_Terrestre {
    numero_Llantas: number= 6;
    modelo: number = 2022;
    fabricante: string = "Casa Vaca";

    conducir(): void {
        console.log("El vehiculo está siendo conducido");
    };
    encender(): void {
        console.log("El vehiculo está encendido");
    };
    acelerar(): void {
        console.log("El vehiculo está acelerando");   
    };
    frenar(): void {
        console.log("El vehiculo está frenando");
    }
    apagar(): void {
        console.log("El vehiculo está apagado");
    }
    cargar(): void{
        console.log("El camión está cargando");
        
    }
}

function procesar(vehiculo: Vehiculo_Terrestre) {
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
camion.conducir()
camion.acelerar()
camion.frenar()
camion.apagar()
camion.encender()
camion.cargar()


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
