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
function enviarMision(xmen) {
    console.log("Enviando a mision a:  " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel:  " + xmen.nombre);
}
var wolverine = {
    nombre: "wolverine",
    poder: "Regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
