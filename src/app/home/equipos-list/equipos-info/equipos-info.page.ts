import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {JugadoresService} from '../../../services/jugadores.service';
import {Jugadores} from '../../../model/jugadores.model';

@Component({
  selector: 'app-equipos-info',
  templateUrl: './equipos-info.page.html',
  styleUrls: ['./equipos-info.page.scss'],
})
export class EquiposInfoPage implements OnInit {

  equipoNombre: string = this.activatedRoute.snapshot.paramMap.get('info');
  private jugadores: Observable<Jugadores[]>;
  constructor(private activatedRoute: ActivatedRoute,
              private jugadoresService: JugadoresService) { }

  ngOnInit() {
    this.jugadores = this.jugadoresService.getJugadoresOfEquipo(this.equipoNombre);
  }
}
