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
  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit() {
    this.jugadoresService.getJugadores().subscribe(jugador => {
    this.jugadores = jugador;
    console.log(this.jugadores);
    this.loaded = true; });
  }

}
