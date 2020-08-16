import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Jugadores} from '../../../../model/jugadores.model';
import {ActivatedRoute} from '@angular/router';
import {JugadoresService} from '../../../../services/jugadores.service';

@Component({
  selector: 'app-equipo-jugadores',
  templateUrl: './equipo-jugadores.page.html',
  styleUrls: ['./equipo-jugadores.page.scss'],
})
export class EquipoJugadoresPage implements OnInit {

  equipoNombre: string = this.activatedRoute.snapshot.paramMap.get('nombre');
  private jugadores: Observable<Jugadores[]>;
  constructor(private activatedRoute: ActivatedRoute,
              private jugadoresService: JugadoresService) { }

  ngOnInit() {
    this.jugadores = this.jugadoresService.getJugadoresOfEquipo(this.equipoNombre);
  }
}
