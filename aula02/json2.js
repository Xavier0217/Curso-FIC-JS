const cidade = {
    "nome": "Piracicaba",
    "estado": "São Paulo",
    "bairros": [
        "Centro", "Vila Fátima", "Jaraguá", "Artemis", "Cecap",
        "Vale do Sol", "Vila Industrial", "Mário Dedini", "Ondas", "Paulista"
    ]
}

console.log(`a cidade de ${cidade.nome}`)

console.log(`tem ${cidade.bairros.length} bairros`)

console.log(`e você está no bairro ${cidade.bairros[6]}`)

console.log("Aqui está todos os bairros: ")

let contador = 0
while (contador < cidade.bairros.length) {
    const bairro = cidade.bairros[contador]

    if (bairro !="Vila Industrial") {
        console.log(`${bairro}`)
    }
    contador++
}