/**
 * Considere o exemplo anterior if.js, adicone as faltas
 * Caso tenha mais que 3 faltas está reprovado
*/

const aluno = "Francisco Júnior"
const nota1 = 8.9
const nota2 = 3.4
const media = (nota1 + nota2) / 2
const faltas = 8

if(media >= 6 && faltas <= 3){
    console.log(`Aluno ${aluno} está aprovado com media ${media} e com faltas ${faltas}`)
} else{
    console.log(`Aluno ${aluno} está reprovado com media ${media} e com faltas ${faltas}`)
}

//Outra forma
if(faltas > 3){
    console.log(`Aluno ${aluno} está reprovado com ${faltas} faltas`)
} else if(media >= 6 ){
    console.log(`Aluno ${aluno} está aprovado com media ${media}`)
} else{
    console.log(`Aluno ${aluno} está reprovado com media ${media}`)
}