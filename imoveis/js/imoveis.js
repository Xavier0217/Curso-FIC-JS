const imoveisDB = [
    {
        "id": 1,
        "url_foto": "img/1.jpg",
        "nome": "Sobrado lindo",
        "cidade": "Saltinho",
        "estado": "Minas Gerais",
        "tipoImovel": "Casa",
        "adicionais": 
        [
            {
                "chave": "Quartos disponiveis",
                "valor": 4
            },
            {
                "chave": "Piscina",
                "valor": "sim"
            }
        ]
    },
    {
        "id": 2,
        "url_foto": "img/2.jpg",
        "nome": "Kitnet Economico",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "tipoImovel": "Apartamento",
        "adicionais": 
        [
            {
                "chave": "Banheiro",
                "valor": 1
            }
        ]
    },
    {
        "id": 3,
        "url_foto": "img/3.jpg",
        "nome": "Casarão na floresta",
        "cidade": "Americana",
        "estado": "São Paulo",
        "tipoImovel": "Casa",
        "adicionais":
        [
        {
            "chave": "Quartos disponiveis",
            "valor": 10
        },
        {
            "chave": "Quintal",
            "valor": "sim"
        },
        {
            "chave": "Arvores",
            "valor": "Bastante"
        }
        ]
    },
    {
        "id": 4,
        "url_foto": "img/4.jpg",
        "nome": "Casa 04",
        "cidade": "Nova Odessa",
        "estado": "São Paulo",
        "tipoImovel": "Casa",
        "adicionais": []
    },
    {
        "id": 5,
        "url_foto": "img/5.jpg",
        "nome": "Casa 05",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "tipoImovel": "Casa",
        "adicionais": []
    },
    {
        "id": 6,
        "url_foto": "img/6.jpg",
        "nome": "Casa 06",
        "cidade": "Cabreúva",
        "estado": "São Paulo",
        "tipoImovel": "Casa",
        "adicionais": []
    },
    {
        "id": 7,
        "url_foto": "img/7.jpg",
        "nome": "Casa 07",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "tipoImovel": "Casa",
        "adicionais": []
    },
    {
        "id": 8,
        "url_foto": "img/8.jpg",
        "nome": "Casa 08",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "tipoImovel": "Casa",
        "adicionais": []
    },
    {
        "id": 9,
        "url_foto": "img/9.jpg",
        "nome": "Casa 09",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "tipoImovel": "Apartamento",
        "adicionais": []
    },
    {
        "id": 10,
        "url_foto": "img/10.jpg",
        "nome": "Casa 10",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "tipoImovel": "Casa",
        "adicionais": []
    }
]

function buscarTodosImoveis() {
    return imoveisDB
}

function buscarImovelPeloId(id) {
    for (let i=0; i < imoveisDB.length; i++) {
        const imv = imoveisDB[i];

        if (imv.id == id) { 
            return imv
        }
    }
}