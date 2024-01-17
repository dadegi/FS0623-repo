let variabile: string;
let variabile2: number;
let nome = 'Pippo';

// nome = 15 ERRORE! Il tipo della variabile non può cambiare una volta definito, anche non esplicitamente (inferenza di tipo)

let custom: string | number; // Tipo di unione
custom = 'Pippo';
custom = 25;

type mioTipo = string | number; // Definizione di custom type

let miaVariabile: mioTipo;
miaVariabile = 'papaerino';
miaVariabile = 12;

let array1: number[] = [1,2,3,4,5];
console.log(array1);

const oggetto1 = {
    nome: 'Pippo',
    eta: 25,
    studente: false
}
console.log(oggetto1);