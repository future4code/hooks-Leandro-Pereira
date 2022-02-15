// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt ("Qual a altura?"))
const largura = Number(prompt("Qual a largura?"))
const calculaAreaRetangulo = altura * largura
console.log(calculaAreaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.
const anoNascimento = prompt ("Em que ano estamos?")
const anoAtual = prompt ("Em que ano você nasceu?")
const idade = anoNascimento - anoAtual
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // Escreva uma função que pede ao usuário seu nome, sua idade e seu email (nessa ordem), e imprime no console uma mensagem como a seguinte:
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

 

} 

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // Escreva uma função que pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores.
const cores = ["Azul", "Amarelo", "Vermelho"]
const corFavorita = prompt ("Qual sua cor favorita?")
const corFavorita1 = prompt ("Qual sua cor favorita?")
const corFavorita2 = prompt ("Qual sua cor favorita?")
console.log (cores) 
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1 > string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // Escreva uma função que recebe um array e retorna o primeiro elemento.
return (array[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // Escreva uma função que recebe um array e retorna o último elemento.
return (array[array.length -1])
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // Escreva uma função que recebe um array e retorna um array com o primeiro e o último elemento trocados.
console.log (array.length)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}