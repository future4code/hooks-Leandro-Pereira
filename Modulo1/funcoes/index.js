// Exercício 01

function imprimirMensagem() {
  console.log("Oi eu sou Leandro, tenho 36 anos e sou estudante Labenu");
}
imprimirMensagem();

function imprimirNomeIdadeCidadeProfissao(nome, idade, cidade, profissao) {
  console.log(
    `Meu nome é ${nome},tenho ${idade} anos, moro em ${cidade}, e sou ${profissao} `
  );
}

imprimirNomeIdadeCidadeProfissao("Leandro", 36, "Botucatu", "estudante.");
imprimirNomeIdadeCidadeProfissao(
  "Érico",
  37,
  "Jericoacoara",
  "Instrutor de Sky Surf."
);
// Exercício 02

function soma(num1, num2) {
  const soma = num1 + num2;
  console.log(soma);
  return soma;
}
soma(2, 3);

function par(numero) {
  return numero === 0;
}
par(8);

function chamarString(string) {
  string.length;
  console.log(string.length);
  const maiuscula = string.toUpperCase();
  console.log(maiuscula);
}
chamarString("Churrasco é top");

// Exercício 03
const primeiroNumero = Number(prompt("Insira um número"));
const segundoNumero = Number(prompt("Insira um número"));

function adicao(num1, num2) {
  let soma = num1 + num2;
  return soma;
}

function subtracao(num1, num2) {
  let subtracao = num1 - num2;
  return subtracao;
}

function multiplicacao(num1, num2) {
  let multiplicacao = num1 * num2;
  return multiplicacao;
}

function divisao(num1, num2) {
  let divisao = num1 / num2;
  return divisao;
}
console.log(adicao(primeiroNumero, segundoNumero));
console.log(subtracao(primeiroNumero, segundoNumero));
console.log(multiplicacao(primeiroNumero, segundoNumero));
console.log(divisao(primeiroNumero, segundoNumero));
console.log(`Números adicionados ${primeiroNumero}, ${segundoNumero}`);

//Desafio

const imprimirResto = (resto) => {
  return resto === 0;
};
console.log(imprimirResto(478 % 2));

const hipotenusa = (cateto1, cateto2) => {
  return Math.hypot(cateto1 * cateto1 + cateto2 * cateto2);
};
console.log(hipotenusa(8, 7));

// 1. na primeira funçao o resultado é 10 e 50 ---- 2. true, true, true porque a propriedade toLowerCase
//corrige todas as entradas
