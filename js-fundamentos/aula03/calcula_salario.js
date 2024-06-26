/**
 * Crie uma função que receba o nome,
 * salario e percentual de aumento
 * do funcionario e calcule o novo salario 
 */

function calcular_aumentoSalario(salario, percen) {
    sal_final = salario + ( salario * percen / 100)
    return sal_final
}

const funcionario = "Aldair Beto Carrero"
const rs = calcular_aumentoSalario(1300, 50)


// console.log(`O salário inicial é de: ${salario}`)

console.log(`O salario final é de: ${rs}`)
