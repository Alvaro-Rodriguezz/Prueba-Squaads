import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JugadoresService} from '../../../services/jugadores.service';
import {Equipos} from '../../../model/equipos.model';
import {EquiposService} from '../../../services/equipos.service';

@Component({
  selector: 'app-equipos-info',
  templateUrl: './equipos-info.page.html',
  styleUrls: ['./equipos-info.page.scss'],
})
export class EquiposInfoPage implements OnInit {

  equipoId: string = this.activatedRoute.snapshot.paramMap.get('id');
  equipo: Equipos = {
    Nombre: '',
    Liga: '',
    LigaId: ''
  }
  constructor(private activatedRoute: ActivatedRoute,
              private equiposService: EquiposService) { }

  ngOnInit() {
    this.equiposService.getEquipoId(this.equipoId).subscribe(equipo => {
      this.equipo = equipo;
    });
  }
}
