import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Jugadores} from '../../../model/jugadores.model';
import {ActivatedRoute, Router} from '@angular/router';
import {JugadoresService} from '../../../services/jugadores.service';
import {ToastController} from '@ionic/angular';

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
              private router: Router) { }

  ngOnInit() {
    this.jugadoresService.getJugadorId(this.jugadorId).subscribe(jugador => {
      this.jugador = jugador;
    });
  }

  eliminarJugador(){
    this.jugadoresService.deleteJugador(this.jugador.id);
  }

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    await toast.present();
  }

  actualizar(){
    if(this.jugador.Numero === ''){
      this.showToast('Por favor, rellene todos los campos')
    } else {
      this.jugadoresService.actualizarJugador(this.jugador).then(() => {
        this.router.navigateByUrl('/home/jugadores-list');
      });
      this.showToast('Jugador actualizado')
    }
    this.jugadoresService.actualizarJugador(this.jugador);
  }
}
