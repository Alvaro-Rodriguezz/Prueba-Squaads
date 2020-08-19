import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Jugadores} from '../../../model/jugadores.model';
import {ActivatedRoute, Router} from '@angular/router';
import {JugadoresService} from '../../../services/jugadores.service';
import {NavController, ToastController} from '@ionic/angular';

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
    Numero: '',
    Foto: '',
    EquipoId: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
              private jugadoresService: JugadoresService,
              private toastCtrl: ToastController,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.jugadoresService.getJugadorId(this.jugadorId).subscribe(jugador => {
      this.jugador = jugador;
    });
  }

  eliminarJugador(){
    this.jugadoresService.deleteJugador(this.jugador.id, this.jugador.Foto);
    this.showToast('Jugador eliminado');
    this.navCtrl.back();
  }

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    await toast.present();
  }

  actualizar(){
    if (this.jugador.Numero === ''){
      this.showToast('Por favor, rellene todos los campos');
    } else {
      this.jugadoresService.actualizarJugador(this.jugador);
      this.showToast('Jugador actualizado');
    }
  }
}
