import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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

  listarImoveisComFiltro(texto: string) {
    const filtroCasa = (document.getElementById("filtroCasa") as HTMLInputElement).checked;
    const filtroApartamento = (document.getElementById("filtroApartamento") as HTMLInputElement).checked;
  
    const textoM = this.removerAcentos(texto.toUpperCase());
  

    this.imoveisFiltrados = [];
  
    for (let i = 0; i < this.imoveisDB.length; i++) {
      const imovel = this.imoveisDB[i];
  
      const nomeImovelIM = this.removerAcentos(imovel.nome.toUpperCase());
      const cidadeImovelIM = this.removerAcentos(imovel.cidade.toUpperCase());
      const estadoImovelIM = this.removerAcentos(imovel.estado.toUpperCase());
      const tipoImovel = imovel.tipoImovel.toUpperCase();
  
      const correspondeTipo = (!filtroCasa && !filtroApartamento) || (filtroCasa && tipoImovel === "CASA") || (filtroApartamento && tipoImovel === "APARTAMENTO");
      const correspondePesquisa = texto === "" || nomeImovelIM.includes(textoM) || cidadeImovelIM.includes(textoM) || estadoImovelIM.includes(textoM);
  
      if (correspondeTipo && correspondePesquisa) {
        this.imoveisFiltrados.push(imovel);
      }
    }
  }
  
  removerAcentos(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
