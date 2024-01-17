import { Disco } from "./modules/interface";

let elenco = document.getElementById('elenco') as HTMLDivElement;

class MioDisco implements Disco {
    titolo: string;
    autore: string;
    anno: number;
    genere: string;
    archivio: boolean;
    constructor(_titolo: string, _autore: string, _anno: number, _genere: string, _archivio: boolean) {
        this.titolo = _titolo;
        this.autore = _autore;
        this.anno = _anno;
        this.genere = _genere;
        this.archivio = _archivio;
    }

    getDisco(): string {
        let presente: string = 'non è presente';
        if(this.archivio) {
            presente = 'è presente'
        }
        return `Il disco ${this.genere} "${this.titolo}" di ${this.autore}, del ${this.anno}, ${presente} in archivio`;
    }
}

const disco1 = new MioDisco('The dark side of the moon', 'Pink Floyd', 1973, 'Prog', true);
const disco2 = new MioDisco('Tommy', 'The Who', 1975, 'Rock Opera', true);
const disco3 = new MioDisco('Led Zeppelin IV', 'Led Zeppelin', 1971, 'Rock', true);
const disco4 = new MioDisco('TNT', 'AC/DC', 1978, 'Hard rock', false);
const disco5 = new MioDisco('Concerto Brandeburghese n. 5', 'J. S. Bach - Camerata Salisburghese', 1979, 'Classica', true);
const disco6 = new MioDisco("Rising", "Rainbow", 1976, "Hard Rock", true);

const mieiDischi = [disco1, disco2, disco3, disco4, disco5, disco6];

for (let i = 0; i < mieiDischi.length; i++) {
    let colonna = document.createElement('div');
    colonna.setAttribute('class', 'col-12');
    let paragrafo = document.createElement('p');
    paragrafo.innerHTML = `<strong>${mieiDischi[i].getDisco()}</strong>`;
    colonna.appendChild(paragrafo);
    elenco.appendChild(colonna);
}