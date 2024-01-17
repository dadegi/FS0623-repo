"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
var elenco = document.getElementById('elenco');
var MioDisco = /** @class */ (function () {
    function MioDisco(_titolo, _autore, _anno, _genere, _archivio) {
        this.titolo = _titolo;
        this.autore = _autore;
        this.anno = _anno;
        this.genere = _genere;
        this.archivio = _archivio;
    }
    MioDisco.prototype.getDisco = function () {
        var presente = 'non è presente';
        if (this.archivio) {
            presente = 'è presente';
        }
        return "Il disco ".concat(this.genere, " \"").concat(this.titolo, "\" di ").concat(this.autore, ", del ").concat(this.anno, ", ").concat(presente, " in archivio");
    };
    return MioDisco;
}());
var disco1 = new MioDisco('The dark side of the moon', 'Pink Floyd', 1973, 'Prog', true);
var disco2 = new MioDisco('Tommy', 'The Who', 1975, 'Rock Opera', true);
var disco3 = new MioDisco('Led Zeppelin IV', 'Led Zeppelin', 1971, 'Rock', true);
var disco4 = new MioDisco('TNT', 'AC/DC', 1978, 'Hard rock', false);
var disco5 = new MioDisco('Concerto Brandeburghese n. 5', 'J. S. Bach - Camerata Salisburghese', 1979, 'Classica', true);
var disco6 = new MioDisco("Rising", "Rainbow", 1976, "Hard Rock", true);
var mieiDischi = [disco1, disco2, disco3, disco4, disco5, disco6];
for (var i = 0; i < mieiDischi.length; i++) {
    var colonna = document.createElement('div');
    colonna.setAttribute('class', 'col-12');
    var paragrafo = document.createElement('p');
    paragrafo.innerHTML = "<strong>".concat(mieiDischi[i].getDisco(), "</strong>");
    colonna.appendChild(paragrafo);
    elenco.appendChild(colonna);
}
