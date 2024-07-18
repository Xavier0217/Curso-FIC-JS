interface Propriedades {
    chave: String
    valor: number|String
}

interface DetalhesAluguel {
    chave: String
    valor: number

}

export interface Imovel {
    id: number
    url_foto: String
    nome: String
    cidade: String
    estado: String
    tipoImovel: String
    favorito: boolean
    latitude: String
    longitude: String
    preco: number
    adicionais: Propriedades[]
    aluguel: DetalhesAluguel[]
}