class Client {
    idClient?: number;
    type?: ClientType;
    adresse?: String;
    codeBare?: CodeBar;
    droits?: Droit[];
    constructor(type: ClientType, id: number) {
        this.idClient = id;
        this.type = type;
    }
}

enum ClientType {
    individu = "individu",
    entreprise = "entreprise"
}

export class Individu extends Client {
    prenom?: String;
    nom?: String;
    email?: String;
    location: Details;

    constructor(id: number) {
        super(ClientType.individu, id);
        this.location = new Details();
    }
}

export class Entreprise extends Client {
    nom?: String;
    phone?: String;
    fax?: String;
    location: Details;
    contact: Contact;

    constructor(id: number) {
        super(ClientType.entreprise, id);
        this.location = new Details();
        this.contact = new Contact();
    }
}

class Details {
    rue?: String;
    ville?: String;
    province?: String;
}

class Contact {
    prenom?: String;
    nom?: String;
    email?: String;
}

export class CodeBar {
    id?: number;
    code?: String;
    products?: Produit[];
    options?: Options[];
    constructor(id: number) {
        this.id = id;
    }
}

export class Options {
    id?: number;
    nom?: String;
    description?: String;
    constructor(id: number) {
        this.id = id;
    }
}

export class Produit {
    id?: number;
    nom?: String;
    description?: String;
    product?: Produit;
    option?: Options;
    constructor(id: number){
        this.id = id;
    }
}

export class Droit {
    idDroit: String;
    type?: DroitType;
    dateDebut?: Date;
    dateFin?: Date;
    constructor(id: String){
        this.idDroit = id;
    }
}

export enum DroitType {
    droit01 = "Droit-01",
    droit02 = "Droit-02",
    droit03 = "Droit-03"
}

class DroitProduit {
    droits?: Droit[];
    products?: Produit[];
}