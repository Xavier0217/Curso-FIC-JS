import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imovel-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './imovel-detalhes.component.html',
  styleUrl: './imovel-detalhes.component.css'
})
export class ImovelDetalhesComponent {

  imovel: Imovel | undefined

  constructor(
    private imvService: ImovelService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.params["id"]
    this.imovel = this.imvService.buscarImovelPeloId(id)
  }
}
