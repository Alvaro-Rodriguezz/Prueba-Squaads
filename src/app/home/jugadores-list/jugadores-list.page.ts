import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Jugadores} from '../../model/jugadores.model';
import {JugadoresService} from '../../services/jugadores.service';

@Component({
  selector: 'app-jugadores-list',
  templateUrl: './jugadores-list.page.html',
  styleUrls: ['./jugadores-list.page.scss'],
})
export class JugadoresListPage implements OnInit {

  loaded = false;
  private jugadores: Jugadores[];
  pipeArg1: 'Nombre';
  pipeArg2: '';
  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit() {
    this.jugadoresService.getJugadores().subscribe(jugador => {
      this.jugadores = jugador;
      this.pipeArg1 = 'Nombre';
      this.pipeArg2 = ''
      this.loaded = true;
    });
  }


}
