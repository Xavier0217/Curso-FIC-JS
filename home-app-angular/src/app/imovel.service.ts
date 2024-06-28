import { Injectable } from '@angular/core';
import { Imovel } from './imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  private imoveisDB: Imovel[] = [
    {
        "id": 1,
        "url_foto":"1.jpg",
        "nome": "Sobrado lindo",
        "cidade": "Saltinho",
        "estado": "Minas Gerais",
        "tipoImovel": "Casa",
        favorito: false,
        "adicionais": [
            {
                "chave": "Quartos disponiveis",
                "valor": 4
            },
            {
                "chave": "Piscina",
                "valor": "sim"
            }
        ],

    },
    {
        "id": 2,
        "url_foto":"2.jpg",
        "nome": "Kitnet Economico",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "tipoImovel": "Apartamento",
        favorito: false,
        "adicionais": [
            {
                "chave": "Banheiro",
                "valor": 1
            }
        ],
    },
    {
        "id": 3,
        "url_foto":"3.jpg",
        "nome": "Casarão na floresta",
        "cidade": "Americana",
        "estado": "São Paulo",
        "tipoImovel": "Casa",
        "favorito": false,
        "adicionais": [
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
        ],
    },
    {
        "id": 4,
        "url_foto":"4.jpg",
        "nome": "Casa 04",
        "cidade": "Nova Odessa",
        "estado": "São Paulo",
        "tipoImovel": "Casa",
        "favorito": false,
        "adicionais": [],
    },
    {
        "id": 5,
        "url_foto": "5.jpg",
        "nome": "Casa 05",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "tipoImovel": "Casa",
        "favorito": false,
        "adicionais": [],
    },
    {
        "id": 6,
        "url_foto": "6.jpg",
        "nome": "Casa 06",
        "cidade": "Cabreúva",
        "estado": "São Paulo",
        "tipoImovel": "Casa",
        "favorito": false,
        "adicionais": [],
    },
    {
        "id": 7,
        "url_foto": "7.jpg",
        "nome": "Casa 07",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "tipoImovel": "Casa",
        "favorito": false,
        "adicionais": [],
    },
    {
        "id": 8,
        "url_foto": "8.jpg",
        "nome": "Casa 08",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "tipoImovel": "Casa",
        "favorito": false,
        "adicionais": [],
    },
    {
        "id": 9,
        "url_foto": "9.jpg",
        "nome": "Casa 09",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "tipoImovel": "Apartamento",
        "favorito": false,
        "adicionais": [],
    },
    {
        "id": 10,
        "url_foto": "10.jpg",
        "nome": "Casa 10",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "tipoImovel": "Casa",
        "favorito": false,
        "adicionais": [],
    }
]

buscarTodosImoveis() {
    return this.imoveisDB
}

buscarImovelPeloId(id: number) : Imovel | undefined {
    let imovel;
    
    for (let i=0; i < this.imoveisDB.length; i++) {
        imovel = this.imoveisDB[i];

        if (imovel.id == id) { 
            break
        }
    }
    return imovel
}
    
}
