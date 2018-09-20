function getNombre() {
    return "Carlos";
}
var mensaje = "hola";
var numero = 123;
var booleano = true;
var hoy = new Date();
var cualquiera;
cualquiera = 23;
cualquiera = "Carlos";
var spiderman = {
    nombre: "Peter",
    edad: 20
};
var nombre = "Carlos";
var apellido = "Garcia";
var edad = 46;
var texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
var texto2 = "" + getNombre();
// console.log(texto)
// console.log(texto2)
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batisseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo la " + objeto;
    }
    // console.log(mensaje);
}
// activar("Godon", "La batiseñal", "tarde");
var funcionF = function (nombre) { return nombre; };
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
// console.log(miFuncion3("Pedro"))
var hulk = {
    mombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre + ", smash!!");
        }, 1500);
    }
};
