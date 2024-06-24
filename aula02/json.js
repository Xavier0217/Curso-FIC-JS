const aluno = {
    "nome": "ALfredo Arlindo de Moraes",
    "idade": 10,
    "escola": "Senai",
    "cidade": "Piracicaba",
    "trabalha": false
}

console.log(`O aluno ${aluno.nome} mora na cidade de ${aluno.cidade}`)
console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos`)

if (aluno.idade >= 18) {
    console.log(`o aluno ${aluno.nome} é maior de idade`)
} else {
    console.log(`o aluno ${aluno.nome} não é maior de idade`)
}