const cursos = [
    {
        "id": 1,
        "nome": "Lógica de programação",
        "nivel": "Básico"
    },
    {
        "id": 2,
        "nome": "Sistemas Operacionais",
        "nivel": "Básico"
    },
    {
        "id": 3,
        "nome": "Algoritmos e Estruturas de Dados",
        "nivel": "Intermediário"
    },
    {
        "id": 4,
        "nome": "Desenvolvimento Web com HTML, CSS e JavaScript",
        "nivel": "Básico"
    },
    {
        "id": 5,
        "nome": "Banco de Dados com SQL",
        "nivel": "Intermediário"
    }
]

const cursosInt = cursos.filter(curso => curso.nivel === "Intermediário")

console.log(cursosInt)

for (let i=0; i < cursos.length; i++) {
    const curso = cursos[i];

    if (curso.nivel == "Intermediário") {
        console.log(`O curso é ${curso.nome}`)
    }
}



