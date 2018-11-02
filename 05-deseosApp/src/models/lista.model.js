"use strict";
exports.__esModule = true;
var Lista = /** @class */ (function () {
    function Lista(titulo) {
        this.id = new Date().getTime();
        this.titulo = titulo;
        this.terminada = false;
        this.creadaEn = new Date();
        this.items = [];
    }
    return Lista;
}());
exports.Lista = Lista;
