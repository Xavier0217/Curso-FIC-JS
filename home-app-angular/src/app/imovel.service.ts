import { Injectable } from '@angular/core';
import { Imovel } from './imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

    private imoveisDB: Imovel[] = [
        {
            "id": 1,
            "url_foto": "1.jpg",
            "nome": "Sobrado lindo",
            "cidade": "Paris",
            "estado": "França",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "48.8566",
            "longitude": "2.3522",
            "preco": 1200000,
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
            "aluguel": [
                {
                    "chave": "Diária",
                    "valor": 300
                },
                {
                    "chave": "Aluguel Mensal",
                    "valor": 5000
                },
                {
                    "chave": "Aluguel Anual",
                    "valor": 60000
                }
            ]
        },
        {
            "id": 2,
            "url_foto": "2.jpg",
            "nome": "Kitnet Economico",
            "cidade": "Nova Iorque",
            "estado": "Estados Unidos",
            "tipoImovel": "Apartamento",
            "favorito": false,
            "latitude": "40.7128",
            "longitude": "-74.0060",
            "preco": 500000,
            "adicionais": [
                {
                    "chave": "Banheiro",
                    "valor": 1
                }
            ],
            "aluguel": [
                {
                    "chave": "Diária",
                    "valor": 150
                },
                {
                    "chave": "Aluguel Mensal",
                    "valor": 2000
                },
                {
                    "chave": "Aluguel Anual",
                    "valor": 24000
                }
            ]
        },
        {
            "id": 3,
            "url_foto": "3.jpg",
            "nome": "Casarão na floresta",
            "cidade": "Rio de Janeiro",
            "estado": "Brasil",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "-22.9068",
            "longitude": "-43.1729",
            "preco": 3500000,
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
            "aluguel": [
                {
                    "chave": "Diária",
                    "valor": 1000
                },
                {
                    "chave": "Aluguel Mensal",
                    "valor": 15000
                },
                {
                    "chave": "Aluguel Anual",
                    "valor": 180000
                }
            ]
        },
        {
            "id": 4,
            "url_foto": "4.jpg",
            "nome": "Casa na Praia",
            "cidade": "Los Angeles",
            "estado": "Estados Unidos",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "34.0522",
            "longitude": "-118.2437",
            "preco": 1800000,
            "adicionais": [
                {
                    "chave": "Piscina",
                    "valor": "não"
                },
                {
                    "chave": "Jardim",
                    "valor": "sim"
                }
            ],
            "aluguel": [
                {
                    "chave": "Diária",
                    "valor": 400
                },
                {
                    "chave": "Aluguel Mensal",
                    "valor": 7000
                },
                {
                    "chave": "Aluguel Anual",
                    "valor": 84000
                }
            ]
        },
        {
            "id": 5,
            "url_foto": "5.jpg",
            "nome": "Casa Jardim",
            "cidade": "Londres",
            "estado": "Reino Unido",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "51.5074",
            "longitude": "-0.1278",
            "preco": 2500000,
            "adicionais": [
                {
                    "chave": "Garagem",
                    "valor": "2 vagas"
                }
            ],
            "aluguel": [
                {
                    "chave": "Diária",
                    "valor": 500
                },
                {
                    "chave": "Aluguel Mensal",
                    "valor": 8000
                },
                {
                    "chave": "Aluguel Anual",
                    "valor": 96000
                }
            ]
        },
        {
            "id": 6,
            "url_foto": "6.jpg",
            "nome": "Casa dos Sonhos",
            "cidade": "Sydney",
            "estado": "Austrália",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "-33.8688",
            "longitude": "151.2093",
            "preco": 3000000,
            "adicionais": [
                {
                    "chave": "Quintal",
                    "valor": "grande"
                }
            ],
            "aluguel": [
                {
                    "chave": "Diária",
                    "valor": 600
                },
                {
                    "chave": "Aluguel Mensal",
                    "valor": 9000
                },
                {
                    "chave": "Aluguel Anual",
                    "valor": 108000
                }
            ]
        },
        {
            "id": 7,
            "url_foto": "7.jpg",
            "nome": "Casa Aconchegante",
            "cidade": "Tóquio",
            "estado": "Japão",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "35.6895",
            "longitude": "139.6917",
            "preco": 2800000,
            "adicionais": [
                {
                    "chave": "Área de lazer",
                    "valor": "piscina e churrasqueira"
                }
            ],
            "aluguel": [
                {
                    "chave": "Diária",
                    "valor": 700
                },
                {
                    "chave": "Aluguel Mensal",
                    "valor": 10000
                },
                {
                    "chave": "Aluguel Anual",
                    "valor": 120000
                }
            ]
        },
        {
            "id": 8,
            "url_foto": "8.jpg",
            "nome": "Apartamento Moderno",
            "cidade": "Dubai",
            "estado": "Emirados Árabes Unidos",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "25.2769",
            "longitude": "55.2963",
            "preco": 1500000,
            "adicionais": [
                {
                    "chave": "Segurança",
                    "valor": "portaria 24h"
                }
            ],
            "aluguel": [
                {
                    "chave": "Diária",
                    "valor": 800
                },
                {
                    "chave": "Aluguel Mensal",
                    "valor": 12000
                },
                {
                    "chave": "Aluguel Anual",
                    "valor": 144000
                }
            ]
        },
        {
            "id": 9,
            "url_foto": "9.jpg",
            "nome": "Apartamento Confortável",
            "cidade": "Hong Kong",
            "estado": "China",
            "tipoImovel": "Apartamento",
            "favorito": false,
            "latitude": "22.3193",
            "longitude": "114.1694",
            "preco": 2000000,
            "adicionais": [
                {
                    "chave": "Academia",
                    "valor": "sim"
                }
            ],
            "aluguel": [
                {
                    "chave": "Diária",
                    "valor": 600
                },
                {
                    "chave": "Aluguel Mensal",
                    "valor": 11000
                },
                {
                    "chave": "Aluguel Anual",
                    "valor": 132000
                }
            ]
        },
        {
            "id": 10,
            "url_foto": "10.jpg",
            "nome": "Casa Charmosa",
            "cidade": "Cidade do Cabo",
            "estado": "África do Sul",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "-33.9249",
            "longitude": "18.4241",
            "preco": 3200000,
            "adicionais": [
                {
                    "chave": "Vista panorâmica",
                    "valor": "serra"
                }
            ],
            "aluguel": [
                {
                    "chave": "Diária",
                    "valor": 700
                },
                {
                    "chave": "Aluguel Mensal",
                    "valor": 13000
                },
                {
                    "chave": "Aluguel Anual",
                    "valor": 156000
                }
            ]
        }
    ];
    
    
    
    
    


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
