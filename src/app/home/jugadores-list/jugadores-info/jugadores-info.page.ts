import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Jugadores} from '../../../model/jugadores.model';
import {ActivatedRoute} from '@angular/router';
import {JugadoresService} from '../../../services/jugadores.service';

@Component({
  selector: 'app-jugadores-info',
  templateUrl: './jugadores-info.page.html',
  styleUrls: ['./jugadores-info.page.scss'],
})
export class JugadoresInfoPage implements OnInit {

  jugadorId: string = this.activatedRoute.snapshot.paramMap.get('id');
  jugador: Jugadores = {
    Nombre: '',
    Apellidos: '',
    Equipo: '',
    Numero: 2,
    Foto: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
              private jugadoresService: JugadoresService) { }

  ngOnInit() {
    this.jugadoresService.getJugadorId(this.jugadorId).subscribe(jugador => {
      this.jugador = jugador;
    });
  }
}
