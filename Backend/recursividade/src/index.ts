//exercise 01

const printNumbers = (n: number) => {
  if (n >= 0) {
    printNumbers(n - 1);
    console.log(n);
  }
};

console.log(printNumbers(5))

const printNumbers2 = (n: number) => {
  if (n >= 0) {
    console.log(n);
    printNumbers2(n - 1);
  }
};

console.log(printNumbers(5))

//exercise 02

export const calculateSumTo = (n: number, acc: number = 0): number => {
  if (n === 0) {
    return acc;
  }
  return calculateSumTo(n - 1, acc + n);
};

// Exemplos de uso:
console.log(calculateSumTo(3));
console.log(calculateSumTo(10));
console.log(calculateSumTo(100));

//exercise 03

export const calculateSumTo2 = (n: number): number => {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Exemplos de uso:
console.log(calculateSumTo2(3));
console.log(calculateSumTo2(10));
console.log(calculateSumTo2(100));

//exercise 04

export const printArray = (arr: number[], i: number = arr.length - 1) => {
  if (i >= 0) {
    printArray(arr, i - 1);
    console.log(`Elemento ${i}: `, arr[i]);
  }
};

// Exemplo de uso:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printArray(array);
