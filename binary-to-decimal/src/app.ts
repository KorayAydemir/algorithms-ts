export function binaryToDecimalConverter1(binaryNumber: number): number {
    return parseInt(binaryNumber.toString(), 2);
}

export function binaryToDecimalConverter2(binaryNumber: number): number {
    const binaryNumberString = binaryNumber.toString().split("");
    let decimalNumber = 0;
    const binaryNumberLength = binaryNumberString.length;
    binaryNumberString.forEach((i, idx) => {
        const power = binaryNumberLength - idx - 1;
        decimalNumber += parseInt(i) * Math.pow(2, power);
    });
    return decimalNumber;
}

const result = binaryToDecimalConverter2(1001);
console.log(result);
