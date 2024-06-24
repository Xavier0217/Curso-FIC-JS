function calcular_aumento(salario_antigo, pct_aumento) {
    const aumento_sal = (salario_antigo * pct_aumento) + salario_antigo
    return aumento_sal
}

const funcionario = {
    "nome": "Aldair Beto Carrero da Silva",
    "idade": 56
}

const aumento = calcular_aumento(5657, 0.25) 

console.log(`Parabéns ${funcionario.nome} você ganhou um aumento! o seu salário atual é: R$${aumento}, não é o antigo é o atual`)