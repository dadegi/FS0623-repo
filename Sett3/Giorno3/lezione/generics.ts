function indefinita<T>(parametro: T): T {
    return parametro;
}

let risultato1 = indefinita<string>('Hello World');
let risultato2 = indefinita<number>(3 + 5);

console.log(risultato1);
console.log(risultato2);