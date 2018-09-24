
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

 const PERSONAJE = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
interface SuperHeroe {
  nombre:string,
  artesMarciales:string[],
}

function enviarMision(superheroe:SuperHeroe) {
  console.log(`Enviando a mision a:  ${superheroe.nombre}`);
}

let batman:SuperHeroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

enviarMision(batman);


// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}
let mifuncion = (a:number, b:number) => (a + b) * 2;

console.log(mifuncion(2, 4));


// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string="arco" ){
  let mensaje:string;
  if( poder ){
     mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  }else{
     mensaje = `${nombre} tiene un  ${arma}`
  }
  console.log(mensaje);
};

getAvenger('Tor', 'Fuerza', 'martillo')

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
  base:number;
  altura:number;

  
  calcArea():number{
    return this.base * this.altura; 
  }
}

let calc:Rectangulo = new Rectangulo();
calc.altura = 10
calc.base = 2
console.log(calc.calcArea());

