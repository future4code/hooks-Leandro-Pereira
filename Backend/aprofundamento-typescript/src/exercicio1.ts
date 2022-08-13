const minhaString:string = "Brasil"
const meuNumero:number = 35

type Pessoa = {
    name:string,
    idade:number,
    corFavorita:Cores
}

enum Cores {
    Amarelo = "Amarelo",
    Vermelho = "Vermelho",
    Laranja = "Laranja",
    Azul = "Azul",
    Violeta = "Violeta",
    Verde = "Verde",
    Anil = "Anil"
}

const gente:Pessoa = {
    name: "Caboclo",
    idade: 2000,
    corFavorita: Cores.Anil
}

