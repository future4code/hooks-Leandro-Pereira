enum Generos {
	ACAO = "ação",
	DRAMA = "drama",
	COMEDIA = "comédia",
	ROMANCE = "romance",
	TERROR = "terror"
}

const addMovies = {
	nome: "",
	anoLancamento: Number(),
	genero: "",
	pontuacao: Number()
}

const catalogue = (nome: string, ano: number, genero: any, pontuacao: number) => {
	addMovies.nome = nome
	addMovies.anoLancamento = ano
	addMovies.genero = genero
	addMovies.pontuacao = pontuacao
	return console.log(addMovies)
}

catalogue("A lista de Schindler", 1980, Generos.DRAMA, 110)