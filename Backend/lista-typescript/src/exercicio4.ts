enum departments {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
  }

  const employees =  [
      { nome: "Marcos", salário: 2500, setor: departments.MARKETING, presencial: true },
      { nome: "Maria" ,salário: 1500, setor: departments.VENDAS, presencial: false},
      { nome: "Salete" ,salário: 2200, setor: departments.FINANCEIRO, presencial: true},
      { nome: "João" ,salário: 2800, setor: departments.MARKETING, presencial: false},
      { nome: "Josué" ,salário: 5500, setor: departments.FINANCEIRO, presencial: true},
      { nome: "Natalia" ,salário: 4700, setor: departments.VENDAS, presencial: true},
      { nome: "Paola" ,salário: 3500, setor: departments.MARKETING, presencial: true }  
  ] 

  const marketing = (array: any[]) => {
    let workaholic: any[] = []
    array.filter((employee) => {
      if (employee.setor === departments.MARKETING && employee.presencial === true) {
        workaholic.push(employee)
      }
    })
    return console.log(workaholic)
  }

  marketing(employees) 