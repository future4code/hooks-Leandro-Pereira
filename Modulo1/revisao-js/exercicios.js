// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayPares = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
      arrayPares.push(array[index]);
    }
  }

  return arrayPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arrayPares = [];
  for (index of array) {
    if (index % 2 === 0) {
      arrayPares.push(index ** 2);
    }
  }

  return arrayPares;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0;
  for (let index = 0; index < array.length; index++) {
    const numeroArray = array[index];
    if (numeroArray > maiorNumero) {
      maiorNumero = numeroArray;
    }
  }
  return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero;
  let menorNumero;
  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }
  maiorDividirMenor = maiorNumero % menorNumero === 0;
  const diferencaNumeros = maiorNumero - menorNumero;
  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDividirMenor,
    diferenca: diferencaNumeros,
  };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let firstPairs = [];
  for (let index = 0; firstPairs.length < n; index += 2) {
    firstPairs.push(index);
  }

  return firstPairs;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  {
    if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
      return "Equilátero";
    }
    if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
      return "Escaleno";
    } else {
      return "Isósceles";
    }
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const segundoMaiorESegundoMenor = [];
  const arrayOrdenado = array.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  segundoMaiorESegundoMenor.push(arrayOrdenado[arrayOrdenado.length - 2]);
  segundoMaiorESegundoMenor.push(arrayOrdenado[1]);
  return segundoMaiorESegundoMenor;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${
    filme.ano
  }, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join([
    (separador = `, `),
  ])}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const anonimous = { ...pessoa, nome: "ANÔNIMO" };
  return anonimous;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const idadeMinima = 14;
  const idadeMaxima = 60;
  const alturaMinima = 1.5;
  const pessoasAutorizada = pessoas.filter((item) => {
    return (
      item.altura >= alturaMinima &&
      item.idade > idadeMinima &&
      item.idade < idadeMaxima
    );
  });

  return pessoasAutorizada;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const alturaMinima = 1.5;
  const idadeMinima = 14;
  const idadeMaxima = 60;
  let pessoaNaoAutorizadas = pessoas.filter((item) => {
    return (
      item.altura < alturaMinima ||
      item.idade <= idadeMinima ||
      item.idade > idadeMaxima
    );
  });

  return pessoaNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (;;) {
    let contador = 0;
    if (contador < contas.length) {
      let compras = contas[contador].compras;
      let soma = compras.reduce((prev, compras) => prev + compras, 0);
      contas[contador].saldoTotal = contas[contador].saldoTotal - soma;
      contas[contador].compras = [];
      contador++;
    }

    return contas;
  }
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
