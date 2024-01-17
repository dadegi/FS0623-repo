var somma = function (num1, num2, num3) {
    if (!num3) {
        return num1 + num2;
    }
    return num1 + num2 + num3;
};
console.log(somma(4, 5));
console.log(somma(3, 7, 2));
