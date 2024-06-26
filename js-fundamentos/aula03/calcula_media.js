/**
 * Exemplo de função que calcula
 * Média aritmética do aluno
 */

function calcular_media(n1, n2) {
    const media = (n1 + n2) / 2
    return media
}

const aluno = "Alfredão Junior"
const rs = calcular_media(4.5, 6.7)

console.log(`A média é: ${rs}`)

if(rs >= 6){
    console.log(`Aluno ${aluno} está aprovado com media ${rs}`)
} else{
    console.log(`Aluno ${aluno} está reprovado com media ${rs}`)
}
