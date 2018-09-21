// Clases TypeScript

class AvengerClase {
    nombre:string = "AntMan";
    equipo:string;
    nombreReal:string;

    puedePelear:boolean;
    peleasGanadas:number;

 }

let antman2:AvengerClase = new AvengerClase();
//console.log(antman2);


// Constructores: Es una funcion que se instancia cuando se crea 
// la clase, es com el metodo __init__() de python

class Avenger {
    nombre:string = undefined;
    equipo:string = undefined;
    nombreReal:string = undefined;

    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

}

let antman:Avenger = new Avenger( "AntMan", "CapitanA",  "Scot Land");
console.log(antman);