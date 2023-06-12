//patron de diseño builder
//clase builder
var PizzaBuilder = /** @class */ (function () {
    function PizzaBuilder() {
        this.pizza = new Pizza();
    }
    PizzaBuilder.prototype.setSalsa = function (salsa) {
        this.pizza.setSalsa(salsa);
        return this;
    };
    PizzaBuilder.prototype.setMasa = function (masa) {
        this.pizza.setMasa(masa);
        return this;
    };
    PizzaBuilder.prototype.setRelleno = function (relleno) {
        this.pizza.setRelleno(relleno);
        return this;
    };
    PizzaBuilder.prototype.build = function () {
        return this.pizza;
    };
    return PizzaBuilder;
}());
//clase pizza
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza.prototype.setSalsa = function (salsa) {
        this.salsa = salsa;
    };
    Pizza.prototype.setMasa = function (masa) {
        this.masa = masa;
    };
    Pizza.prototype.setRelleno = function (relleno) {
        this.relleno = relleno;
    };
    Pizza.prototype.toString = function () {
        return "Pizza: salsa ".concat(this.salsa, " - masa ").concat(this.masa, " - relleno ").concat(this.relleno);
    };
    return Pizza;
}());
//clase director
var Cocina = /** @class */ (function () {
    function Cocina() {
    }
    Cocina.prototype.setPizzaBuilder = function (pizzaBuilder) {
        this.pizzaBuilder = pizzaBuilder;
    };
    Cocina.prototype.getPizza = function () {
        return this.pizzaBuilder.build();
    };
    return Cocina;
}());
//main
var cocina = new Cocina();
var hawaianaBuilder = new PizzaBuilder();
hawaianaBuilder.setMasa("suave");
hawaianaBuilder.setRelleno("piña+bacon");
hawaianaBuilder.setSalsa("dulce");
cocina.setPizzaBuilder(hawaianaBuilder);
var hawaiana = cocina.getPizza();
console.log(hawaiana.toString());
var picanteBuilder = new PizzaBuilder();
picanteBuilder.setMasa("cocida");
picanteBuilder.setRelleno("pimienta+salchichón");
picanteBuilder.setSalsa("picante");
cocina.setPizzaBuilder(picanteBuilder);
var picante = cocina.getPizza();
console.log(picante.toString());
