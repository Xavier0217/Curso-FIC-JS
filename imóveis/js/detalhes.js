function buscarImovel() {
    const urlPagina = window.location.href
    const id = urlPagina.split("=")[1]
    const imvDetalhe = buscarImovelPeloId(id)
    atualizarImovel(imvDetalhe)
}

function atualizarImovel(imovel) {
    // section imagem
    const imgImv = document.getElementById("img")
    imgImv.setAttribute("src", imovel.url_foto)

    // section titulo
    const tituloImv = document.getElementById("titulo")
    tituloImv.textContent = imovel.nome

    // section localização
    const localizacaoImv = document.getElementById("localizacao")
    localizacaoImv.textContent = (`${imovel.cidade} - ${imovel.estado}`)

    // // section preço
    // const precoImv = document.getElementById("preco")
    // precoImv.textContent = (`R$ ${imovel.preco}`)

    // // section descrição
    // const descricaoImv = document.getElementById("descricao")
    // descricaoImv.textContent = (`${imovel.descricao}`)

    // // section contato
    // const contatoImv = document.getElementById("contato")
    // contatoImv.textContent = (`${imovel.contato}`)

    // // section telefone
    // const telefoneImv = document.getElementById("telefone")
    // telefoneImv.textContent = (`${imovel.telefone}`)

    // // section email
    // const emailImv = document.getElementById("email")
    // emailImv.textContent = (`${imovel.email}`)

    const adicionaisImv = imovel.adicionais
    const ul = document.getElementById("lista-adicionais")

    if (adicionaisImv.length == 0) {
       
        const li = document.createElement("li")
        li.textContent = "Nenhum adicional disponível"
        ul.appendChild(li)
    } else {
        
        for (let i = 0; i < adicionaisImv.length; i++) {
            const adicional = adicionaisImv[i]
            const chave = adicional.chave
            const valor = adicional.valor
    
            const li = document.createElement("li")
            li.textContent = `${chave}: ${valor}`
            
            ul.appendChild(li)
        }
    }

    
    }