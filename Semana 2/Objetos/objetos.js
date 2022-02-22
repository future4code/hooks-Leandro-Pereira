//exercicios interpretação
//1. no primeiro console será impresso Matheus Nachtergaele, no segundo Vírginia Cavendish, no terceiro Canal Globo,
//horario 14h
//2. Neste exercicio no primeiro console será exibido juca, 3, SRD - no segundo console será Juba, 3 , SRD e no terceiro será
// jubo, 3 , SRD - A sintaxe dos três pontos copia um objeto, um array e etc.
//3. Será exibido false e undefined. Porque não há valor definido para altura no objeto

//Exercício 1
const nomeApelidos = {
    nome: "Leandro",
    apelidos: ["Coxinha", "Cirilo", "Chassi de grilo"]
}

function imprimeObjeto(nomeApelidos) {
    console.log(`Eu me chamo ${nomeApelidos.nome}, mas pode me chamar de ${nomeApelidos.apelidos[0]}, ${nomeApelidos.apelidos[1]}, ou ${nomeApelidos.apelidos[2]}`)
    return nomeApelidos
}
imprimeObjeto(nomeApelidos)

const newObjeto = {
    ...nomeApelidos,
    apelidos: ["Filé de borboleta", "Caveirinha", "Panhozzi"]

}
console.log(newObjeto)


//Exercício 2
const pessoa = {
    nome: "Leandro",
    idade: 36,
    profissão: "Oficial Administrativo"
}


const pessoa1 = {
    nome: "Sandra",
    idade: 40,
    profissão: "Técnica de enfermagem"
}


function array(array) {
    newArray = [{ nome: "Leandro", idade: 36, profissao: "Oficial administrativo" },
    { nome: "Sandra", idade: 40, profissao: "Técnica de enfermagem" }]
    console.log(newArray)
    return array
}
array(pessoa)


//Exercício 3

const carrinho = []

const frutas = {
    nome: "Abacate",
    disponibilidade: true
}

const frutas1 = {
    nome: "Melância",
    disponibilidade: false
}

const frutas1 = {
    nome: "Pêra",
    disponibilidade: true
}

function frutas (frutas){
    
}
