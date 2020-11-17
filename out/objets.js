"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DroitType = exports.Droit = exports.Produit = exports.Options = exports.CodeBar = exports.Entreprise = exports.Individu = void 0;
var Client = /** @class */ (function () {
    function Client(type, id) {
        this.idClient = id;
        this.type = type;
    }
    return Client;
}());
var ClientType;
(function (ClientType) {
    ClientType["individu"] = "individu";
    ClientType["entreprise"] = "entreprise";
})(ClientType || (ClientType = {}));
var Individu = /** @class */ (function (_super) {
    __extends(Individu, _super);
    function Individu(id) {
        var _this = _super.call(this, ClientType.individu, id) || this;
        _this.location = new Details();
        return _this;
    }
    return Individu;
}(Client));
exports.Individu = Individu;
var Entreprise = /** @class */ (function (_super) {
    __extends(Entreprise, _super);
    function Entreprise(id) {
        var _this = _super.call(this, ClientType.entreprise, id) || this;
        _this.location = new Details();
        _this.contact = new Contact();
        return _this;
    }
    return Entreprise;
}(Client));
exports.Entreprise = Entreprise;
var Details = /** @class */ (function () {
    function Details() {
    }
    return Details;
}());
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());
var CodeBar = /** @class */ (function () {
    function CodeBar(id) {
        this.id = id;
    }
    return CodeBar;
}());
exports.CodeBar = CodeBar;
var Options = /** @class */ (function () {
    function Options(id) {
        this.id = id;
    }
    return Options;
}());
exports.Options = Options;
var Produit = /** @class */ (function () {
    function Produit(id) {
        this.id = id;
    }
    return Produit;
}());
exports.Produit = Produit;
var Droit = /** @class */ (function () {
    function Droit(id) {
        this.idDroit = id;
    }
    return Droit;
}());
exports.Droit = Droit;
var DroitType;
(function (DroitType) {
    DroitType["droit01"] = "Droit-01";
    DroitType["droit02"] = "Droit-02";
    DroitType["droit03"] = "Droit-03";
})(DroitType = exports.DroitType || (exports.DroitType = {}));
var DroitProduit = /** @class */ (function () {
    function DroitProduit() {
    }
    return DroitProduit;
}());
