const name = process.argv[2];
const age = Number(process.argv[3]) 
const futureAge = Number(process.argv[4])

const result = `Olá meu nome é ${name} e minha idade é ${age} anos. Em sete anos eu terei ${futureAge} anos`
console.log(result)