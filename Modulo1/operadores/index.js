// exercício 01
const qualSuaIdade = prompt ("Qual sua idade?")
const idadeMelhorAmigo = 38
const idadeMelhorAmiga = 41
const minhaIdade = 36
const comparar = minhaIdade > idadeMelhorAmigo
const compararMinhaIdadeComOutras = qualSuaIdade > minhaIdade

console.log("sua idade é maior que a do seu melhor amigo?", comparar)
console.log(qualSuaIdade, "sou mais velho?", compararMinhaIdadeComOutras)

// exercício 02
const insiraUmNumeroPar = prompt ("Insira um número par")
const resultadoInsiraNumeroPar = insiraUmNumeroPar % 2

console.log(resultadoInsiraNumeroPar)
// Se todos os números forem pares o resto será sempre zero, mas se for um número impar sobrará resto.

// exercício 03
const quantosAnosVoceTem = prompt ("Quantos anos você tem?")
const idadeEmMesess = quantosAnosVoceTem * 12
const idadeEmDias = quantosAnosVoceTem * 365
const idadeEmHoras = (quantosAnosVoceTem * 365) * 60
console.log (idadeEmMesess, "meses", idadeEmHoras, "horas", idadeEmDias, "dias")
// exercício 04
const numero = 60
const numero1 = 30
const comparar2 = numero > numero1
const comparar3 = numero === numero1
const comparar4 = ((numero % numero1) === 0)
const comparar5 = ((numero1 % numero) === 0)

console.log (comparar2, comparar3, comparar4, comparar5)
// desafio 1
let fahrenheitEmKelvin = (77-32) * (5/9) + 273.15
let fahrenheitEmCelsius = (80) * (9/5 ) + 32
let celsiusEmFahrenheit = (30) * (9/5) + 32
let celsiusEmKelvin = 30 +273.15

console.log (fahrenheitEmKelvin, "Kelvin")
console.log (fahrenheitEmCelsius, "Celsius")
console.log (celsiusEmFahrenheit, "Fahrenheit")
console.log (celsiusEmKelvin, "Kelvin")
//desafio 2
let quilowattHora = prompt ("insira a quantidade consumida")
let resultadoQuilowattHora = quilowattHora * (0.05)
let descontoQuilowattHora = ((quilowattHora * 0.05)/1.15)

console.log (resultadoQuilowattHora)
console.log (descontoQuilowattHora, "desconto de 15 porcento")

// desafio 4
const libraParaKilo = prompt ("Libra para Quilo")
const resultadoEmKilo = libraParaKilo / 2.2046
const oncaParaKilo = prompt ("Onça para Quilo")
const resultadoOncaEmQuilo = oncaParaKilo / 35.274
const milhaParaMetro = prompt ("Milha para Metro")
const resultadoMilhaParaMetro = milhaParaMetro * 1609.34 
const pesParaMetro = prompt ("Pes para Metro")
const resultadoPesParaMetro = pesParaMetro * 0.3048
const galoesEmLitros = prompt ("Galões para Litros")
const resultadoGaloesEmLitros = galoesEmLitros * 3.785
const xicaraParaLitros = prompt ("Xícaras para Litros")
const resultadoXicarasParaLitros = xicaraParaLitros * 0.15

console.log (libraParaKilo, " libras equivalem a", resultadoEmKilo, "quilos")
console.log (oncaParaKilo, " onças equivalem a", resultadoOncaEmQuilo, "quilos")
console.log (milhaParaMetro, " milhas equivalem a ", resultadoMilhaParaMetro, "metros")
console.log (pesParaMetro, " pés equivalem a ", resultadoPesParaMetro, "metros")
console.log (galoesEmLitros, " galões equivalem a", resultadoGaloesEmLitros, "litros")
console.log (xicaraParaLitros, " xícaras equivalem a ", resultadoXicarasParaLitros, "litros")
 
//Exercício escrito
//1-False, False, True, Bolean 2- o primeiro número virá seguiro do segundo  
