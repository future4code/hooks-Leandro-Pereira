//Exercício 01

const idadeDirigir = Number(prompt("Quantos anos você Tem?"))
if (idadeDirigir === 18)  {console.log("Você pode dirigir")
    
}else {
    console.log("Você não pode dirigir")
}

//Exercício 02

const turnoEstudar = prompt("Em qual turno Você estuda? M, V, N?" )

if (turnoEstudar.toUpperCase() === "M") {console.log("Bom dia!")
    
} else if (turnoEstudar.toUpperCase() === "V"){
    console.log ("Boa Tarde!") 
}else if (turnoEstudar.toUpperCase() === "N"){console.log("Boa noite!")

}

//Exercício 03

const turnoEstudar1 = prompt("Em qual turno Você estuda? M, V, N?");

switch (turnoEstudar1.toUpperCase()) {
  case "M":
    console.log("Bom Dia!");
    break;

  case "V":
    console.log("Boa tarde!");
    break;
  case "N":
    console.log("Boa noite!");
    break;

  default:
    break;
}

//Exercício 04

const filmeFantasia = prompt ("O filme é fantasia? SIM ou NÃO?")
const valorIngresso = prompt("Custa mais de 15 reais? SIM ou NÃO")

if (filmeFantasia.toUpperCase() === "SIM" && valorIngresso.toUpperCase() === "SIM") {console.log("Bom filme!")
    
} else {console.log("Escolha outro filme!")
    
}

//Desafio 01

