import { Component, input } from '@angular/core';
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
  

  constructor(private imovelService: ImovelService) {
    this.imoveisDB = this.imovelService.buscarTodosImoveis();
  }

  listarImoveisComFiltro(texto: string) {
    if (texto.trim() === "") {
        this.imoveisDB = this.imovelService.buscarTodosImoveis();
    } else {
        const imoveisFiltrados: Imovel[] = [];

        const textoM = this.removerAcentos(texto.toUpperCase());

        for (let i = 0; i < this.imoveisDB.length; i++) {
            const imovel = this.imoveisDB[i];
            const cidadeImovelM = this.removerAcentos(imovel.cidade.toUpperCase());
            const estadoImovelM = this.removerAcentos(imovel.estado.toUpperCase());

            if (cidadeImovelM.includes(textoM) || estadoImovelM.includes(textoM)) {
                imoveisFiltrados.push(imovel);
            }
        }

        this.imoveisDB = imoveisFiltrados;
    }
}
  
  removerAcentos(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  favoritar(imovel: Imovel) {
    // imovel.favorito = !imovel.favorito

    if (imovel.favorito == false) {
      imovel.favorito = true
      const audio = new Audio('favoritarSom.mp3')
      audio.play()
    } else {
      imovel.favorito = false
    }
  }

  mostrarFavoritos() {
    const listaFiltrada: Imovel[] = []

    for (let i = 0; i < this.imoveisDB.length; i++) {
      const imovel = this.imoveisDB[i]
      if (imovel.favorito == true) {
        listaFiltrada.push(imovel)
      }
    }
    this.imoveisDB = listaFiltrada
  }

  mostrarTodos(desmarcarRadio = false) {
    this.imoveisDB = this.imovelService.buscarTodosImoveis()

    if (desmarcarRadio == true) {
      const inputCasa: any = document.getElementById('radioCasa')
      const inputApto: any = document.getElementById('radioApto')

      if (inputCasa || undefined && inputApto || undefined) {
        inputCasa.checked = false
        inputApto.checked = false
    }
  }
}

  filtrarTipo(tipo: String) {
    this.mostrarTodos()

    const listaFiltrada: Imovel[] = [];
  
    for (let i = 0; i < this.imoveisDB.length; i++) {
       const imovel = this.imoveisDB[i];
      if (imovel.tipoImovel == tipo) {
         listaFiltrada.push(imovel);
       }
    }
    this.imoveisDB = listaFiltrada;
  }

  abrirMapa(imovel: Imovel) {
    window.open(`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${imovel.latitude},${imovel.longitude}`);
  }

}
