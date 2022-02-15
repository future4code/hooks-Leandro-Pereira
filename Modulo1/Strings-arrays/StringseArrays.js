//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
const nome = prompt ("Qual seu nome?")
const email = prompt ("Qual seu email?")
const frase = `O email ${email} foi cadastrado com sucesso. Seja bem vindo (a), ${nome}!`    
console.log (frase)
//Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
const comidasFavoritas = ["Sopa de Mandioca", "Feijoada", "Lasanha", "Pizza", "Strogonoff"]
const comidaFavoritaUsuario = prompt ('Qual sua comida favorita?')
console.log (comidasFavoritas)
console.log ("Essas são as minhas comidas preferidas:", comidasFavoritas[0],comidasFavoritas[1],comidasFavoritas[2],comidasFavoritas [3],comidasFavoritas[4])

//a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
