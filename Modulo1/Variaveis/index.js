// Insira nome e idade
const nome = prompt ("Qual seu nome?")
const idade = prompt ("Qual sua Idade?")
console.log (nome, idade)
console.log (typeof nome, typeof idade)
// Esse tipo de variável sem valor torna-se um obeto, porque ele não tem valor nenhum de pesquisa.

// Quando adicionado um valor torna-se uma variável de tipo string
console.log ("Olá Leandro", "Você tem 37 anos")
const myName = "Leandro"
const age = 37
console.log (myName, age)

// Insira valores de verdadeiro ou falso

let oClimaEstaBom = true
let amanhaSabado = false
let euGostoDeCafeComLeite = false
console.log (oClimaEstaBom, amanhaSabado, euGostoDeCafeComLeite)

// Troca de valores
let a = 10
let b = 25
let c 
console.log (c=a, a=b, b=c)
// Salário por hora

let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let salarioDiario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioDiario/horasTrabalhadas} por hora`)
console.log (salarioDiario/horasTrabalhadas, ("por hora"))

// Desafio
let n1 = 10
let n2 = 25
console.log (n1 + n2, n1 * n2)

// Interpretação lógica respostas: 1. Serão apresentados os valores (10) e (10, 5) 2. Todos os valores serão iguais a (10) 3. No terceiro exercício serão calculados os valores para hora trabalhada.

