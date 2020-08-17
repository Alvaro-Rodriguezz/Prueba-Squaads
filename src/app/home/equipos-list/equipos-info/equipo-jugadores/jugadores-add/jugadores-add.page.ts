import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Jugadores} from '../../../../../model/jugadores.model';
import {EquiposService} from '../../../../../services/equipos.service';
import {Equipos} from '../../../../../model/equipos.model';

@Component({
  selector: 'app-jugadores-add',
  templateUrl: './jugadores-add.page.html',
  styleUrls: ['./jugadores-add.page.scss'],
})
export class JugadoresAddPage implements OnInit {

  equipoId: string = this.activatedRoute.snapshot.paramMap.get('id');
  jugador: Jugadores = {
    Nombre: '',
    Apellidos: '',
    Equipo: this.equiposService.getGuardado(),
    Numero: '',
    Foto: '',
    EquipoId: this.equipoId
  }

  constructor(private activatedRoute: ActivatedRoute,
              private equiposService: EquiposService) { }

  ngOnInit() {

  }

  addJugador(){

  }
}
