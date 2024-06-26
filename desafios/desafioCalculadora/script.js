// Forma 01:

// let operacao_calcular = ""
// let n1 = 0
// let n2 = 0

// const display = document.getElementById("display")

// function mostrar_display(numero) {

//     if (numero == "+" || numero == "-" || numero == "*" || numero == "/") {
//         operacao_calcular = numero // armazena a op matematica
//         n1 = display.value // guarda o 1° numero
//         display.value = "" // limpa o display
//     }else{
//         if (numero == "=") {
//             n2 = display.value // guarda o 2° numero
//             calcular() // calcular
//         } else {
//             // Vai acumulando o numero no Display
//             display.value += numero
//         }
    
//     }

    
// }

// function calcular() {
//    const rs = Number(n1) + Number(n2)
//    display.value = rs
// }



// Forma 02:

const display = document.getElementById("display")

function mostrar_display(numero) {
    display.value += numero
}

function zerar_display(numero) {
    if (display.value == 0) {
        display.value = " "
        display == numero
    } else {
        display == numero
    }
}

function apagar() {
    display.value = 0
}

function calcular() {
    const rs = eval(display.value)
    display.value = rs
}




