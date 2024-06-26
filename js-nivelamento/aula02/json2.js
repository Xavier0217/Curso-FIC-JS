const cidade = {
    "nome": "Piracicaba",
    "estado": "SP",
    "bairros": [
        "Centro", "Vila Fatima", "Jaragua", "Campestre", "Artemis", 
        "Cecap", "Vale do Sol", "Paulsita", "Ondas", "Mario Dedini"
    ]
}

console.log(`A cidade ${cidade.nome} fina estado de ${cidade.estado}`)

console.log(`Tem ${cidade.bairros.length} bairros que são: `)

//Fazer um for para listar os bairros

//Opção 1:
let contador = 0
while (contador < cidade.bairros.length) {
    const bairro = cidade.bairros[contador]
    console.log(`Bairro: ${bairro}`)

    if(bairro != "Artemis"){
        console.log(`${bairro}`)

    }
    
    contador++
}

//Opção 2:
for (let i=0; i < cidade.bairros.length; i++){
    console.log(`Bairro: ${i}`)
}




