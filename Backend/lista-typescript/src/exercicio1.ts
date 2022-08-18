
const BirthDate = (nome: string, birthday: string) => {
    const nameAndAge = birthday.replace("/","")
    return console.log(`Olá me chamo ${nome}, nasci no dia ${nameAndAge.slice(0,2)} do mês ${nameAndAge.slice(2,4)} do ano de ${nameAndAge.slice(5)}`)
  }

  BirthDate("Leandro","04/06/1985") 