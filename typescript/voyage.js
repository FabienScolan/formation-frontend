"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.sejours = [];
        this.sejours.push(new Sejour("Paris", 100));
        this.sejours.push(new Sejour("Rio de Janeiro", 600));
    }
    SejourService.prototype.getSejourByName = function (nomSejour) {
        var filtre = this.sejours.filter(function (arg) {
            return nomSejour === arg.nom;
        });
        return filtre[0];
    };
    return SejourService;
}());
var sejourservice = new SejourService();
var s = sejourservice.getSejourByName("Paris");
console.log(s.nom + " " + s.prix);
