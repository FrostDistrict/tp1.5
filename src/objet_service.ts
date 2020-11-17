import { Individu } from "./objets";
import { Entreprise } from "./objets";
import { Droit } from "./objets";
import { Produit } from "./objets";
import { Options } from "./objets";
import { DroitType } from "./objets";

const faker = require('faker')
const fs = require('fs')

function generateObjects() {
    let tableau = [];
    for(let id=1; id<6; id++) {
        let rdmNumber = Math.floor(Math.random() * 2) + 1;
        let client;
        if(rdmNumber == 1){
            client = new Individu(id);
            client.prenom = faker.name.firstName();
            client.nom = faker.name.lastName();
            client.email = faker.internet.email();
            client.location.province = faker.address.county();
            client.location.rue = faker.address.streetName();
            client.location.ville = faker.address.city();
            client.adresse = faker.address.streetAddress();
        }
        else{
            client = new Entreprise(id);
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
    for(let id=1; id< 10 ; id++) {
        let rdmNumber = Math.floor(Math.random() * 2) + 1;
        if(rdmNumber == 1){
            let produit = new Produit(id);
            produit.nom = faker.commerce.product();
            produit.description = faker.commerce.productDescription();
            produit.option = new Options(id);
            produit.option.nom = faker.commerce.productName();
            produit.option.description = faker.finance.transactionDescription();
            tableau.push({
                "Produit": produit
            });
        }
        else{
            let droit = new Droit(faker.internet.domainName());
            droit.type = DroitType.droit01;
            droit.dateDebut = faker.date.past();
            droit.dateFin = faker.date.recent();
            tableau.push({
                "Droit": droit
            });
        }
    }
    return {"entity": tableau};
}

let objetGenerer = generateObjects();

fs.writeFileSync('../data/objets.json', JSON.stringify(objetGenerer, null, '\t'));