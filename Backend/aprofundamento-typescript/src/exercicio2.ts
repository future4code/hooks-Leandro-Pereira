
function obterEstatisticas(numeros:number[]):{maior:number,menor:number,media:number} {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type Amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas :{}
}

//a. as entradas são array de números e as saídas são objetos
//b. variáveis de numeros
