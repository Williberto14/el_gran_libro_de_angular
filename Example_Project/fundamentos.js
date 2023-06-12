var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// abstract class --------------------------
var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
    }
    return Vehiculo;
}());
var Mamifero = /** @class */ (function () {
    function Mamifero() {
    }
    Mamifero.prototype.amamantar = function () {
        console.log("Estoy amamantando");
    };
    ;
    return Mamifero;
}());
// class --------------------------
var Tablet = /** @class */ (function () {
    function Tablet() {
    }
    Tablet.prototype.recargar = function () {
        console.log("Estoy recargando");
    };
    return Tablet;
}());
var Bicicleta = /** @class */ (function (_super) {
    __extends(Bicicleta, _super);
    function Bicicleta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bicicleta.prototype.pedalear = function () {
        console.log("Estoy pedaleando");
    };
    return Bicicleta;
}(Vehiculo));
var BicicletaElectrica = /** @class */ (function (_super) {
    __extends(BicicletaElectrica, _super);
    function BicicletaElectrica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BicicletaElectrica.prototype.recargar = function () {
        console.log("Estoy recargando");
    };
    return BicicletaElectrica;
}(Bicicleta));
var Murcielago = /** @class */ (function (_super) {
    __extends(Murcielago, _super);
    function Murcielago() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Murcielago.prototype.volar = function () {
        console.log("Estoy volando");
    };
    Murcielago.prototype.amamantar = function () {
        console.log("Soy un murcielago y estoy amamantando");
    };
    return Murcielago;
}(Mamifero));
var Drone = /** @class */ (function (_super) {
    __extends(Drone, _super);
    function Drone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drone.prototype.volar = function () {
        console.log("Estoy volando");
    };
    Drone.prototype.recargar = function () {
        console.log("Estoy recargando");
    };
    return Drone;
}(Vehiculo));
// main --------------------------
var drone = new Drone();
drone.volar();
drone.recargar();
var murcielago = new Murcielago();
murcielago.volar();
murcielago.amamantar();
var bicicleta = new Bicicleta();
bicicleta.pedalear();
var bicicletaElectrica = new BicicletaElectrica();
bicicletaElectrica.pedalear();
bicicletaElectrica.recargar();
var tablet = new Tablet();
tablet.recargar();
