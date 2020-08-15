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

  private jugadores: Observable<Jugadores[]>;
  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit() {
    this.jugadores = this.jugadoresService.getJugadores();
  }

}
