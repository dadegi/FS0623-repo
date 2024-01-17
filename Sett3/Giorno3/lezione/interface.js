var Utente = /** @class */ (function () {
    function Utente(_studente, _eta, _tecnologie, _durata) {
        this.studente = _studente;
        this.eta = _eta;
        this.tecnologie = _tecnologie;
        this.durata = _durata;
    }
    Utente.prototype.getStudente = function () {
        return "Lo studente ".concat(this.studente, ", di anni ").concat(this.eta);
    };
    Utente.prototype.getCorso = function () {
        return " sta frequentando il corso di ".concat(this.tecnologie, " della ddurata di ").concat(this.durata, " mesi");
    };
    Utente.prototype.completo = function () {
        return this.getStudente() + this.getCorso();
    };
    return Utente;
}());
var nuovoUtente = new Utente('Pippo', 25, ['HTML', 'CSS', 'Javascript'], 3);
console.log(nuovoUtente.completo());
