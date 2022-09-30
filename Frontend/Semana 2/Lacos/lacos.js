//Exercício 01

/* const bichinhosDeEstimacao = Number(prompt("Quantos pets você tem?"));

if (bichinhosDeEstimacao === 0) {
  console.log("Que pena! Você pode adotar um Pet!");
}
if (bichinhosDeEstimacao > 0) {
  let meusPets = [];
  for (let i = 0; i < bichinhosDeEstimacao; i++) {
    meusPets.push(prompt("Qual o nome do seu Pet?"));
  }
  console.log(meusPets);
} */
// Exercício 02
//a) Escreva um programa que imprime cada um dos valores do array original.

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

function imprimeArray(original) {
  for (let item of original) {
    console.log(item);
  }
}
imprimeArray(array);

//b) Escreva um programa que imprime cada um dos valores do array original divididos por 10

function dividirArray(Dividir10) {
  for (let index of Dividir10) {
    const dividirPorDez = index / 10;
    console.log(dividirPorDez);
  }
}
dividirArray(array);

//c) Escreva um programa que crie um novo array contendo, somente,
// os números pares do array original e imprima esse novo array

function numerosPares(pares) {
  for (index of pares) {
    if (index % 2 === 0) {
      console.log(index);
    }
  }
}
numerosPares(array);

//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma:
//"O elemento do índex i é: numero". Depois, imprima este novo array.





//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

let maiorNumero = array[0];
let menorNumero = array[0];

for (let num of array) {
  if (num > maiorNumero) {
    maiorNumero = num;
  } else if (num < menorNumero) {
    menorNumero = num;
  }
}
console.log(maiorNumero, menorNumero)