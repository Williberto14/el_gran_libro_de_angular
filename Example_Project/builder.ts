//patron de diseño builder

//clase builder
class PizzaBuilder {
    private pizza: Pizza;
    constructor() {
        this.pizza = new Pizza();
    }
    public setSalsa(salsa: string): PizzaBuilder {
        this.pizza.setSalsa(salsa);
        return this;
    }
    public setMasa(masa: string): PizzaBuilder {
        this.pizza.setMasa(masa);
        return this;
    }
    public setRelleno(relleno: string): PizzaBuilder {
        this.pizza.setRelleno(relleno);
        return this;
    }
    public build(): Pizza {
        return this.pizza;
    }
}

//clase pizza
class Pizza {
    private salsa: string;
    private masa: string;
    private relleno: string;
    public setSalsa(salsa: string): void {
        this.salsa = salsa;
    }
    public setMasa(masa: string): void {
        this.masa = masa;
    }
    public setRelleno(relleno: string): void {
        this.relleno = relleno;
    }
    public toString(): string {
        return `Pizza: salsa ${this.salsa} - masa ${this.masa} - relleno ${this.relleno}`;
    }
}

//clase director
class Cocina {
    private pizzaBuilder: PizzaBuilder;
    public setPizzaBuilder(pizzaBuilder: PizzaBuilder): void {
        this.pizzaBuilder = pizzaBuilder;
    }
    public getPizza(): Pizza {
        return this.pizzaBuilder.build();
    }
}

//main
let cocina: Cocina = new Cocina();

let hawaianaBuilder: PizzaBuilder = new PizzaBuilder();
hawaianaBuilder.setMasa("suave");
hawaianaBuilder.setRelleno("piña+bacon");
hawaianaBuilder.setSalsa("dulce");
cocina.setPizzaBuilder(hawaianaBuilder);

let hawaiana: Pizza = cocina.getPizza();
console.log(hawaiana.toString());

let picanteBuilder: PizzaBuilder = new PizzaBuilder();
picanteBuilder.setMasa("cocida");
picanteBuilder.setRelleno("pimienta+salchichón");
picanteBuilder.setSalsa("picante");
cocina.setPizzaBuilder(picanteBuilder);

let picante: Pizza = cocina.getPizza();
console.log(picante.toString());