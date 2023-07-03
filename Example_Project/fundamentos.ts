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
        console.log("Mamifero amamantando");
    };
}

// class --------------------------
class Tablet implements IRecargable {
    public recargar(): void {
        console.log("Tablet recargando");
    }
}

class Bicicleta extends Vehiculo {
    public pedalear(): void {
        console.log("Bicicleta pedaleando");
    }
}

class BicicletaElectrica extends Bicicleta implements IRecargable {
    public recargar(): void {
        console.log("Bicicleta electrica recargando");
    }
    public pedalear(): void {
        console.log("Bicicleta electrica pedaleando");
    }
}

class Murcielago extends Mamifero implements IVolador {
    public volar(): void {
        console.log("Murcielago volando");
    }
    amamantar(): void {
        console.log("Soy un murcielago y estoy amamantando");
    }
}

class Drone extends Vehiculo implements IVolador, IRecargable {
    public volar(): void {
        console.log("Dron volando");
    }

    public recargar(): void {
        console.log("Dron recargando");
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
