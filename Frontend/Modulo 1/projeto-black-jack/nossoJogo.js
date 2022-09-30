/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const jogar = confirm("Iniciar jogo");

if (jogar) {
  console.log("Boas Vindas ao Blackjack!");
} else {
  console.log("Fim de jogo!");
}

if (jogar) {
  const desafiante1 = comprarCarta();
  const desafiante2 = comprarCarta();

  const dealer1 = comprarCarta();
  const dealer2 = comprarCarta();
  const pontosDesafiante = desafiante1.valor + desafiante2.valor;
  const pontosDealer = dealer1.valor + dealer2.valor;
  console.log(
    `Desafiante ${desafiante1.texto}, ${desafiante2.texto} : ${pontosDesafiante}`
  );
  console.log(`Dealer ${dealer1.texto}, ${dealer2.texto} : ${pontosDealer}`);

  if (pontosDesafiante > 21) {
    ("Você Perdeu");
  } else if (pontosDesafiante > pontosDealer) {
    console.log("Você Venceu!!");
  } else if (pontosDealer > pontosDesafiante) {
    console.log("Você Perdeu!!");
  } else if (pontosDesafiante === pontosDealer) {
    console.log("Empate");
  } else {
    console.log("Fim  de jogo");
  }
}
