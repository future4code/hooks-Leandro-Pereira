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
function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
