/*
function getNombre(){
    return "Carlos";
}


let mensaje:string = "hola";

 let numero:number = 123;

 let booleano:boolean = true;

 let hoy:Date = new Date();

 let cualquiera:any;
 cualquiera = 23
 cualquiera = "Carlos"

 let spiderman = {
     nombre: "Peter",
     edad: 20
    }

let nombre:string = "Carlos";
let apellido:string = "Garcia";
let edad:number = 46;

let texto = `Hola, ${nombre} ${apellido} (${edad})`;

let texto2:string = `${ getNombre() }`

// console.log(texto)
// console.log(texto2)

function activar(quien:string,
    objeto:string = "batisseñal", momento?:string){
    let mensaje:string;

    if(momento){
        mensaje = `${quien} activo la ${objeto} en la ${momento}`;
    }else{
        mensaje = `${quien} activo la ${objeto}`;
    }

    // console.log(mensaje);
}
// activar("Godon", "La batiseñal", "tarde");

let funcionF = (nombre:string) => nombre;

let miFuncion3 = (nombre:string) =>{
    nombre = nombre.toUpperCase();
    return nombre;
}
// console.log(miFuncion3("Pedro"))


let hulk = {
    mombre: "Hulk",
    smash(){
        setTimeout( () =>{
            console.log(`${this.nombre}, smash!!`)
        }, 1500)
    }
}
*/
// Destructuracion de Objetos
var avenger = {
    nombre: 'Steve',
    clave: 'Capitan America',
    poder: 'Droga'
};
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
//console.log(nombre, clave, poder);
// Destructuracion de Arreglos
var avengers = ["Tor", "Steve", "Tony"];
var tor = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(tor, capi, ironman);
