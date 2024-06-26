const aluno = {
    "nome": "Alfredo Arlindo Moraes",
    "idade": 10,
    "escola": "Senai",
    "cidade":"Piracicaba",
    "maior_idade": false
}

console.log(`O aluno ${aluno.nome} mora na cidade de ${aluno.cidade}`)
console.log(`O aluno ${aluno.nome} tem ${aluno.idade}`)


if (aluno.idade <= 18) {
    console.log(`O aluno ${aluno.nome} é menor de idade com ${aluno.idade} anos`)
}else{
    console.log(`O aluno ${aluno.nome} é maior de idade com ${aluno.idade} anos`)
}