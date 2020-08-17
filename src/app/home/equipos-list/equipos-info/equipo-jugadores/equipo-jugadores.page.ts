import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Jugadores} from '../../../../model/jugadores.model';
import {ActivatedRoute} from '@angular/router';
import {JugadoresService} from '../../../../services/jugadores.service';
import {Equipos} from '../../../../model/equipos.model';
import {EquiposService} from '../../../../services/equipos.service';

@Component({
  selector: 'app-equipo-jugadores',
  templateUrl: './equipo-jugadores.page.html',
  styleUrls: ['./equipo-jugadores.page.scss'],
})
export class EquipoJugadoresPage implements OnInit {

  equipoId: string = this.activatedRoute.snapshot.paramMap.get('id');
  private jugadores: Observable<Jugadores[]>;
  equipo: Equipos = {
    Nombre: '',
    Liga: '',
    LigaId: ''
  }
  dataAvailable = false;
  constructor(private activatedRoute: ActivatedRoute,
              private equiposService: EquiposService,
              private jugadoresService: JugadoresService) { }

  ngOnInit() {
    this.jugadores = this.jugadoresService.getJugadoresOfEquipo(this.equipoId);
    this.equiposService.getEquipoId(this.equipoId).subscribe(equipo => {
      this.equipo = equipo;
    });
  }
}
