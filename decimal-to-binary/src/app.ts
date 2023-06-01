export function decimalToBinaryConverter(decimalNumber: number) {
    let binaryNumber = "";
    while (decimalNumber > 0) {
        binaryNumber = (decimalNumber % 2) + binaryNumber;
        decimalNumber = Math.floor(decimalNumber / 2);
    }
    return binaryNumber;
}

const result = decimalToBinaryConverter(10); // 1010
console.log(result);
