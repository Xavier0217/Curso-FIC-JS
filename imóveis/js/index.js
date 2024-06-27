const imoveis = buscarTodosImoveis()

function criarImovelHTML(imovel, id) {
    const section = document.createElement("section")
    section.setAttribute("class", "listing")

    const img = document.createElement("img")
    img.setAttribute("class", "listing-photo")
    img.setAttribute("src", imovel.url_foto)

    section.appendChild(img)

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "listing-heading")
    h2.textContent = imovel.nome

    section.appendChild(h2)

    const p = document.createElement("p")
    p.setAttribute("class", "listing-location")
    p.textContent = `${imovel.cidade}, ${imovel.estado}`

    section.appendChild(p)

    const a = document.createElement("a")
    a.textContent = "Veja mais"

    const url = `detalhes.html?imovelId=${imovel.id}`
    a.setAttribute("href", url)

    section.appendChild(a)

    const favId = `fav-${imovel.id}`
    const favorito = document.createElement("img")
    favorito.setAttribute("id", favId)
    favorito.setAttribute("src", "img/naoFavorito.png")
    favorito.setAttribute("class", "favorito")
    favorito.setAttribute("onclick", `favoritar(${JSON.stringify(imovel)})`)
    section.appendChild(favorito)

    const sectionResults = document.getElementById("lista-imoveis")
    sectionResults.appendChild(section)
}

function filtrar() {
    const pesquisa = document.getElementById("pesquisa").value
    listarImoveisComFiltro(pesquisa)
}

function filtrarComEnter(tecla) {
    if (tecla.keyCode == 13) {
        tecla.preventDefault()
        filtrar()
    }
}

function listarImoveisComFiltro(texto) {
    limparListaImoveis()

    const filtroCasa = document.getElementById("filtroCasa").checked
    const filtroApartamento = document.getElementById("filtroApartamento").checked

    const mostrarTodos = !filtroCasa && !filtroApartamento

    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i]

        const textoIM = removerAcentos(texto.toUpperCase())
        const nomeImoveIM = removerAcentos(imovel.nome.toUpperCase())
        const cidadeImovelIM = removerAcentos(imovel.cidade.toUpperCase())
        const estadoImovelIM = removerAcentos(imovel.estado.toUpperCase())

        const tipoImovel = imovel.tipoImovel.toLowerCase()

        if (mostrarTodos || (filtroCasa && tipoImovel === "casa") || (filtroApartamento && tipoImovel === "apartamento")) {
            
            if (texto === "" || nomeImoveIM.includes(textoIM) || cidadeImovelIM.includes(textoIM) || estadoImovelIM.includes(textoIM)) {
                criarImovelHTML(imovel)
            }
        }
    }
}

function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function mostrarTodosOsImoveis() {
    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i]
        criarImovelHTML(imovel)

    }
}

function limparListaImoveis() {
    const sectionResults = document.getElementById("lista-imoveis")

    while (sectionResults.lastElementChild) {
        sectionResults.removeChild(sectionResults.lastElementChild)
    }
}

mostrarTodosOsImoveis()

function favoritar(imovel) {
    const favId = `fav-${imovel.id}`
    const fav = document.getElementById(favId)

    if (fav.getAttribute("src") == "img/favorito.png") {
        fav.setAttribute("src", "img/naofavorito.png")
    } else {
        fav.setAttribute("src", "img/favorito.png")
    }
}
