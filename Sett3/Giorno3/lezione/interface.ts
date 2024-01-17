interface Studente {
    studente: string;
    eta: number
}

interface Corso {
    tecnologie: string[];
    durata: number;
}

class Utente implements Studente, Corso {
    studente: string;
    eta: number;
    tecnologie: string[];
    durata: number;
    constructor(_studente: string, _eta: number, _tecnologie: any, _durata: number) {
        this.studente = _studente;
        this.eta = _eta;
        this.tecnologie = _tecnologie;
        this.durata = _durata;
    }

    getStudente(): string {
        return `Lo studente ${this.studente}, di anni ${this.eta}`;
    }

    getCorso(): string {
        return ` sta frequentando il corso di ${this.tecnologie} della ddurata di ${this.durata} mesi`
    }

    completo(): string {
        return this.getStudente() + this.getCorso();
    }
}

let nuovoUtente = new Utente('Pippo', 25, ['HTML','CSS','Javascript'], 3);
console.log(nuovoUtente.completo());