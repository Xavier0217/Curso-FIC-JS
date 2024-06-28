let imoveis = buscarTodosImoveis();

if (window.localStorage.getItem("lista") === null) {
    window.localStorage.setItem("lista", JSON.stringify(imoveis));
} else {
    imoveis = JSON.parse(window.localStorage.getItem("lista"));
}

function criarImovelHTML(imovel) {
    console.log("Criando HTML para:", imovel); // Adiciona log para depuração
    const section = document.createElement("section");
    section.setAttribute("class", "listing");

    const img = document.createElement("img");
    img.setAttribute("class", "listing-photo");
    img.setAttribute("src", imovel.url_foto);

    section.appendChild(img);

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "listing-heading");
    h2.textContent = imovel.nome;

    section.appendChild(h2);

    const p = document.createElement("p");
    p.setAttribute("class", "listing-location");
    p.textContent = `${imovel.cidade}, ${imovel.estado}`;

    section.appendChild(p);

    const a = document.createElement("a");
    a.textContent = "Veja mais";
    const url = `detalhes.html?imovelId=${imovel.id}`;
    a.setAttribute("href", url);

    section.appendChild(a);

    const favId = `fav-${imovel.id}`;
    const favorito = document.createElement("img");
    favorito.setAttribute("id", favId);

    if (imovel.favorito) {
        favorito.setAttribute("src", "img/favorito.png");
    } else {
        favorito.setAttribute("src", "img/naoFavorito.png");
    }

    favorito.setAttribute("class", "favorito");
    favorito.setAttribute("onclick", `favoritar(${imovel.id})`);
    section.appendChild(favorito);

    const sectionResults = document.getElementById("lista-imoveis");
    sectionResults.appendChild(section);
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

    const textoM = removerAcentos(texto.toUpperCase());

    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i]

        const textoIM = removerAcentos(texto.toUpperCase())
        const nomeImovelIM = removerAcentos(imovel.nome.toUpperCase())
        const cidadeImovelIM = removerAcentos(imovel.cidade.toUpperCase())
        const estadoImovelIM = removerAcentos(imovel.estado.toUpperCase())
        const tipoImovel = imovel.tipoImovel.toUpperCase()

        const correspondeTipo = (!filtroCasa && !filtroApartamento) || (filtroCasa && tipoImovel === "CASA") || (filtroApartamento && tipoImovel === "APARTAMENTO");
        const correspondePesquisa = texto === "" || nomeImovelIM.includes(textoM) || cidadeImovelIM.includes(textoM) || estadoImovelIM.includes(textoIM);

        if (correspondeTipo && correspondePesquisa) {
            criarImovelHTML(imovel, `imovel-${imovel.id}`); 
        }
    }
}

function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function mostrarTodosOsImoveis() {
    limparListaImoveis()

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

function favoritar(id) {
    const favId = `fav-${id}`;
    const fav = document.getElementById(favId);
    const imovel = imoveis.find(imovel => imovel.id === id);

    if (fav.getAttribute("src") === "img/favorito.png") {
        fav.setAttribute("src", "img/naoFavorito.png");
        imovel.favorito = false;
    } else {
        fav.setAttribute("src", "img/favorito.png");
        imovel.favorito = true;
    }

    window.localStorage.setItem("lista", JSON.stringify(imoveis));
}

function mostrarFavoritos() {
    limparListaImoveis();

    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i];
        if (imovel.favorito) {
            criarImovelHTML(imovel);
        }
    }
}


function mostrarTodosOsImoveis() {
    limparListaImoveis();
    console.log("Mostrando todos os imóveis"); // Adiciona log para depuração
    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i];
        criarImovelHTML(imovel);
    }
}