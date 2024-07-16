import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imoveisDB: Imovel[] = [];
  imoveisFiltrados: Imovel[] = [];

  constructor(private imovelService: ImovelService) {
    this.imoveisDB = this.imovelService.buscarTodosImoveis();
    this.imoveisFiltrados = this.imoveisDB; // Inicializar com todos os imóveis
  }

  listarImoveisComFiltro(texto: String) {
    
    if (texto == "") {
        this.imoveisDB = this.imovelService.buscarTodosImoveis()
    } else {
        const imoveisFiltrados: Imovel[] = []

        for (let i = 0; i < this.imoveisDB.length; i++) {
            const imovel = this.imoveisDB[i]

            const textoM = this.removerAcentos(texto.toUpperCase())
            const cidadeImovelM = this.removerAcentos(imovel.cidade.toUpperCase())
            const estadoImovelM = this.removerAcentos(imovel.estado.toUpperCase())

            if (cidadeImovelM.search(textoM) == 0 ||
                estadoImovelM.search(textoM) == 0) {

                imoveisFiltrados.push(imovel)
            }
        }
        this.imoveisDB = imoveisFiltrados
    }
}
  
  removerAcentos(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
