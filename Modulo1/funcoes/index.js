// Exercício 01

function imprimirMensagem () {
    
console.log ("Oi eu sou Leandro, tenho 36 anos e sou estudante Labenu")
}
imprimirMensagem ()

function imprimirNomeIdadeCidadeProfissao(nome, idade, cidade, profissao) {
    console.log (`Meu nome é ${nome},tenho ${idade} anos, moro em ${cidade}, e sou ${profissao} `)
  
}
imprimirNomeIdadeCidadeProfissao("Leandro", 36, "Botucatu", "estudante.")
imprimirNomeIdadeCidadeProfissao("Érico", 37, "Jericoacoara", "Instrutor de Sky Surf.")
// Exercício 02

function soma(num1, num2) {

const soma = num1 + num2
console.log (soma)
const boleano = num1 >= num2
console.log(boleano)
const numeroPar = (num1%2) === 0
console.log (numeroPar)
return soma 
}
soma (2, 3)

function chamarString(string) {

string.length
console.log(string.length )
const maiuscula = string.toUpperCase()
console.log (maiuscula)
    
}
chamarString ("Churrasco é top")

// Exercício 03

function operacoes(adicao, subtracao, multiplicacao, divisao) {
    const soma1 = adicao
    console.log(soma1)
    const subtracao1 = subtracao
    console.log(subtracao1)
    const multiplicacao1 = multiplicacao
    console.log(multiplicacao1)
    const divisao1 = divisao
    console.log(divisao1)
    console.log ("Números inseridos: 30 e 3")
}
operacoes ((30 + 3),(30 - 3),(30 * 3),(30 / 3) )

//Desafio

const imprimirResto = (resto) => {

const resto1 = resto
console.log (resto1)

}

imprimirResto (478%2)