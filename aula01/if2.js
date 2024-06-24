/**
 * Considere o exemplo anterior if.js, adicione as faltas caso tenha mais que 3 faltas está reprovado
 */

let aluno = "Adalberto Machado"
let nota1 = 11
let nota2 = 3.4
let faltas = 2
const media = (nota1 + nota2) / 2

if (faltas > 3) {
    console.log(`Aluno ${aluno} está reprovado por excesso de faltas, com ${faltas} faltas`)
}
else if (media >= 3) {
    // aprovado
    console.log(`Aluno ${aluno} está aprovado com media ${media}`)
} else {
    // reprovado
    console.log(`O ${aluno} está reprovado com media de ${media}`)
}

