
const operations = (num_1:number, num_2:number):any => {
    const add:number = num_1 + num_2;
    const sub:number = num_1 - num_2;
    const mul:number = num_1 / num_2;
    const div:number = num_1 % num_2;
    let maiorNumero:number  

    if(num_1 > num_2) {
        maiorNumero = num_1
    }else{
        maiorNumero = num_2
    }

    return `A soma é ${add}, a subtração é  ${sub}, a multiplicação é ${mul}, a divisão é ${div} e o maiorNumero é ${maiorNumero}`
}

console.log(operations(2022, 1985))