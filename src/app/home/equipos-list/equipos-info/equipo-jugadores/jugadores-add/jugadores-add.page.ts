import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Jugadores} from '../../../../../model/jugadores.model';
import {EquiposService} from '../../../../../services/equipos.service';
import {Equipos} from '../../../../../model/equipos.model';
import {ToastController} from '@ionic/angular';
import {JugadoresService} from '../../../../../services/jugadores.service';

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
              private toastCtrl: ToastController,
              private router: Router,
              private equiposService: EquiposService,
              private jugadoresService: JugadoresService) { }

  ngOnInit() {

  }

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    await toast.present();
  }

  addJugador(){
    const url = '/home/equipos-list/equipos-info/' + this.equipoId;
    if (this.jugador.Nombre === '' || this.jugador.Apellidos === '' || this.jugador.Numero === ''){
      this.showToast('Por favor, rellene todos los campos');
    } else {
      this.jugadoresService.addJugador(this.jugador).then(() => {
        this.router.navigateByUrl(url).then((e) => {
          if (e) {
            console.log('Navigation is successful!');
          } else {
            console.log('Navigation has failed!');
          }
          return false;
        });
        this.showToast('Jugador añadido al equipo ' + this.jugador.Equipo);
      }, () => {
        this.showToast('Hubo un problema añadiendo al jugador');
      });
    }
  }
}
