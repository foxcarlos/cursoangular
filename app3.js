// Clases TypeScript
var AvengerClase = /** @class */ (function () {
    function AvengerClase() {
        this.nombre = "AntMan";
    }
    return AvengerClase;
}());
var antman2 = new AvengerClase();
//console.log(antman2);
// Constructores: Es una funcion que se instancia cuando se crea 
// la clase, es com el metodo __init__() de python
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = undefined;
        this.equipo = undefined;
        this.nombreReal = undefined;
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("AntMan", "CapitanA", "Scot Land");
console.log(antman);
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    return Villano;
}());
