const num1:number = 4
const num2:number = 5

function comparaDoisNumeros(num1:number, num2:number):number {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }

console.log(comparaDoisNumeros(num1, num2))  