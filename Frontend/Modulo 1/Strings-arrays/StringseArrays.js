//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
const nome = prompt ("Qual seu nome?")
const email = prompt ("Qual seu email?")
const frase = `O email ${email} foi cadastrado com sucesso. Seja bem vindo (a), ${nome}!`    
console.log (frase)
//Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.

 funcoes
 semana2-aula7
 master
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
const comidasFavoritas = ["Sopa de Mandioca", "Feijoada", "Lasanha", "Pizza", "Strogonoff"]
const comidaFavoritaUsuario = prompt ('Qual sua comida favorita?')
console.log (comidasFavoritas)
console.log ("Essas são as minhas comidas preferidas:", comidasFavoritas[0],comidasFavoritas[1],comidasFavoritas[2],comidasFavoritas [3],comidasFavoritas[4])

//a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista
const comidasFavoritas = ["Sopa de Mandioca", "Feijoada", "Lasanha", "Pizza", "Strogonoff"]
const comidaFavoritaUsuario = prompt ('Qual sua comida favorita?')
console.log (comidasFavoritas)
console.log ("Essas são as minhas comidas preferidas:", comidasFavoritas[0])
console.log (comidasFavoritas[1])
console.log (comidasFavoritas[2])
console.log (comidasFavoritas[3])
console.log (comidasFavoritas[4])
comidasFavoritas[1] = comidaFavoritaUsuario
console.log (comidasFavoritas)

//a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
const listaDeTarefas = []
const tarefas = prompt ("insira uma tarefa")
listaDeTarefas.push(tarefas)
const tarefas1 = prompt ("insira uma tarefa")
listaDeTarefas.push(tarefas1)
const tarefas2 = prompt ("insira uma tarefa")
listaDeTarefas.push(tarefas2) 
console.log(listaDeTarefas)
const digiteUmaTarefa = prompt ("qual tarefa já foram feitas?")
listaDeTarefas.splice(Number(digiteUmaTarefa),1)
console.log(listaDeTarefas)

 funcoes
 master

master
 master
