"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objets_1 = require("./objets");
var objets_2 = require("./objets");
var objets_3 = require("./objets");
var objets_4 = require("./objets");
var objets_5 = require("./objets");
var objets_6 = require("./objets");
var faker = require('faker');
var fs = require('fs');
function generateObjects() {
    var tableau = [];
    for (var id = 1; id < 6; id++) {
        var rdmNumber = Math.floor(Math.random() * 2) + 1;
        var client = void 0;
        if (rdmNumber == 1) {
            client = new objets_1.Individu(id);
            client.prenom = faker.name.firstName();
            client.nom = faker.name.lastName();
            client.email = faker.internet.email();
            client.location.province = faker.address.county();
            client.location.rue = faker.address.streetName();
            client.location.ville = faker.address.city();
            client.adresse = faker.address.streetAddress();
        }
        else {
            client = new objets_2.Entreprise(id);
            client.nom = faker.company.companyName();
            client.phone = faker.phone.phoneNumber();
            client.fax = faker.phone.phoneNumber();
            client.location.province = faker.address.county();
            client.location.rue = faker.address.streetName();
            client.location.ville = faker.address.city();
            client.contact.prenom = faker.name.firstName();
            client.contact.nom = faker.name.lastName();
            client.contact.email = faker.internet.email();
            client.adresse = faker.address.streetAddress();
        }
        tableau.push({
            "Client": client
        });
    }
    for (var id = 1; id < 10; id++) {
        var rdmNumber = Math.floor(Math.random() * 2) + 1;
        if (rdmNumber == 1) {
            var produit = new objets_4.Produit(id);
            produit.nom = faker.commerce.product();
            produit.description = faker.commerce.productDescription();
            produit.option = new objets_5.Options(id);
            produit.option.nom = faker.commerce.productName();
            produit.option.description = faker.finance.transactionDescription();
            tableau.push({
                "Produit": produit
            });
        }
        else {
            var droit = new objets_3.Droit(faker.internet.domainName());
            droit.type = objets_6.DroitType.droit01;
            droit.dateDebut = faker.date.past();
            droit.dateFin = faker.date.recent();
            tableau.push({
                "Droit": droit
            });
        }
    }
    return { "entity": tableau };
}
var objetGenerer = generateObjects();
fs.writeFileSync('../data/objets.json', JSON.stringify(objetGenerer, null, '\t'));
