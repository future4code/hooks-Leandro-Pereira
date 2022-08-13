type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// usaria o comando tsc seguido do nome do arquivo para executar a transpilação de arquivos
// poderiamos configurar um caminho no package.json para executarmos o comando npm run start
// para transpilarmos varios arquivos usamos o comando tsc seguido do nome dos arquivos colocando espaço entre os arquivos
