const somma = (num1: number, num2: number, num3?: number):number => {
    if(!num3) {
        return num1 + num2;
    }
    return num1 + num2 + num3!;
}

console.log(somma(4, 5));
console.log(somma(3, 7, 2));