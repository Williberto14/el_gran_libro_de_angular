// interfaces --------------------------
interface IVolador {
    volar(): void;
}

interface IRecargable {
    recargar(): void;
}

// abstract class --------------------------
abstract class Vehiculo {
    protected encendido: boolean;
    protected velocidad: number;
    protected color: string;
}

abstract class Mamifero {
    protected nombre: string;
    protected edad: number;
    amamantar(): void {
        console.log("Estoy amamantando");
    };
}

// class --------------------------
class Tablet implements IRecargable {
    public recargar(): void {
        console.log("Estoy recargando");
    }
}

class Bicicleta extends Vehiculo {
    public pedalear(): void {
        console.log("Estoy pedaleando");
    }
}

class BicicletaElectrica extends Bicicleta implements IRecargable {
    public recargar(): void {
        console.log("Estoy recargando");
    }
}

class Murcielago extends Mamifero implements IVolador {
    public volar(): void {
        console.log("Estoy volando");
    }
    amamantar(): void {
        console.log("Soy un murcielago y estoy amamantando");
    }
}

class Drone extends Vehiculo implements IVolador, IRecargable {
    public volar(): void {
        console.log("Estoy volando");
    }

    public recargar(): void {
        console.log("Estoy recargando");
    }
}

// main --------------------------

let drone: Drone = new Drone();
drone.volar();
drone.recargar();

let murcielago: Murcielago = new Murcielago();
murcielago.volar();
murcielago.amamantar();

let bicicleta: Bicicleta = new Bicicleta();
bicicleta.pedalear();

let bicicletaElectrica: BicicletaElectrica = new BicicletaElectrica();
bicicletaElectrica.pedalear();
bicicletaElectrica.recargar();

let tablet: Tablet = new Tablet();
tablet.recargar();
