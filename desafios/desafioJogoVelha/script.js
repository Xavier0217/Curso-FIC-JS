let simbolo = "0"

function jogar(identificador) {

    if (simbolo == "X") {
        simbolo = "0"
    } else if (simbolo == "0"){
        simbolo = "X"
    }

    const divHtml = document.getElementById(identificador)
    divHtml.textContent = simbolo

    verificar_ganahador()
}

function verificar_ganahador() {
    const div1 = document.getElementById("div1").textContent
    const div2 = document.getElementById("div2").textContent
    const div3 = document.getElementById("div3").textContent
    const div4 = document.getElementById("div4").textContent
    const div5 = document.getElementById("div5").textContent
    const div6 = document.getElementById("div6").textContent
    const div7 = document.getElementById("div7").textContent
    const div8 = document.getElementById("div8").textContent
    const div9 = document.getElementById("div9").textContent
    

    if (div1 == simbolo && div2 == simbolo && div3 == simbolo) {
        alert(`O jogador ${simbolo} ganhou`)
    } else if (div4 == simbolo && div5 == simbolo && div6 == simbolo) {
        alert(`O jogador ${simbolo} ganhou`)
    } else if (div7 == simbolo && div8 == simbolo && div9 == simbolo) {
        alert(`O jogador ${simbolo} ganhou`)
    } else if (div1 == simbolo && div4 == simbolo && div7 == simbolo) {
        alert(`O jogador ${simbolo} ganhou`)
    } else if (div2 == simbolo && div5 == simbolo && div8 == simbolo) {
        alert(`O jogador ${simbolo} ganhou`)
    } else if (div3 == simbolo && div6 == simbolo && div9 == simbolo) {
        alert(`O jogador ${simbolo} ganhou`)
    } else if (div1 == simbolo && div5 == simbolo && div9 == simbolo) {
        alert(`O jogador ${simbolo} ganhou`)
    } else if (div7 == simbolo && div5 == simbolo && div3 == simbolo) {
        alert(`O jogador ${simbolo} ganhou`)
    }
}

function reiniciar(){  
 location.reload()

}