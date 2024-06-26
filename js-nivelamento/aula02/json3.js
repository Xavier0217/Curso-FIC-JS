const cursos = [
    {        
        "id": 1,
        "nome": "Lógica de Programação",
        "nivel": "Básico",
    },
    {
        "id": 2,
        "nome": "Sistemas Operacionais",
        "nivel": "Básico",
    },
    {
        "id": 3,
        "nome": "Pogramação Web Backend",
        "nivel": "Intermediario",
    },
    {
        "id": 4,
        "nome": "Pogramação Web Frontend",
        "nivel": "Intermediario",
    },
    {
        "id": 5,
        "nome": "Pogramação Mobile",
        "nivel": "Intermediario",
    }
]

//Mostrar somente os cursos de nível Intermediario

for (let i=0; i < cursos.length; i++){
    const curso = cursos[i]

    if (curso.nivel == "Intermediario") {
        console.log(`O curso é ${curso.nome}`)
    }
}