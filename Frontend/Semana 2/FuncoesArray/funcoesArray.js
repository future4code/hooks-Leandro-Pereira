// Exercício 01
//a) Crie um novo array que contenha apenas o nome dos doguinhos

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

const nomeDoguinhos = pets.map((pets) => {
  return pets.nome;
});
console.log(nomeDoguinhos);

//b) Crie um novo array apenas com os cachorros salsicha

const cachorrosSalsicha = pets.filter((pets) => {
  return pets.raca === "Salsicha";
});
console.log(cachorrosSalsicha);

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser:
// "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const poodles = pets.filter((pets) => {
  return pets.raca === "Poodle";
});
console.log(poodles);

const poodles2 = poodles.map((pets) => {
  return `Você ganhou um desconto de 10% para tosar o/a ${pets.nome}`;
});

console.log(poodles2);

// Exercício 02

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

//a) Crie um novo array que contenha apenas o nome de cada item

const nomeItem = produtos.map((produtos) => {
  return produtos.nome;
});
console.log(nomeItem);

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const nomePreco = produtos.map((desconto, index) => {
  return { nome: desconto.nome, preco: desconto.preco * 0.95 };
});

console.log(nomePreco);

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const bebidas = produtos.filter((bebidas) => {
  return bebidas.categoria === "Bebidas";
});
console.log(bebidas);

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const ype = produtos.filter((ype) => {
  if (ype.nome.includes("Ypê")) {
    return ype;
  }
});
console.log(ype);

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const arrayString = ype.map((nome) => {
  return `Compre  ${nome.nome} por ${nome.preco}`;
});
console.log(arrayString);

//Desafios
//a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

const nomesPokemons = pokemons.map((nomes) => {
  return nomes.nome;
});
console.log(nomesPokemons);

const nomesOrganizados = nomesPokemons.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
});
console.log(nomesOrganizados);

// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

const tiposPokemons = pokemons.map((tipos) => {
  return tipos.tipo;
});
console.log(tiposPokemons);

const tiposDiferentes = tiposPokemons.filter(
  (pokemon, i) => tiposPokemons.indexOf(pokemon) === i
);
console.log(tiposDiferentes);
  
// exercício interpretação
//1) exibira o nome e o apelido de cada um dos usuarios
//2) exibira apenas os nomes de cada usuarios
//3) exibira os usuarios que não contenham a strring chijo
