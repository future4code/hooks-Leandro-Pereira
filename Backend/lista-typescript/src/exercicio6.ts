const clients = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const reduceBalance = clients.map((cliente) => {
  let totalDebts = [cliente.debitos.reduce((a,b) => a + b, 0)]
  cliente.debitos = totalDebts
  cliente.saldoTotal = cliente.saldoTotal - cliente.debitos[0]
  cliente.debitos = []
  return cliente
})

const negativeClient = clients.filter((cliente) => {
  return cliente.saldoTotal < 0
})

console.log(negativeClient) 