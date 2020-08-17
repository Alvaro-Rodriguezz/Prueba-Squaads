import { Component, OnInit } from '@angular/core';
import {Equipos} from '../../../../../model/equipos.model';
import {ActivatedRoute, Router} from '@angular/router';
import {LigasService} from '../../../../../services/ligas.service';
import {ToastController} from '@ionic/angular';
import {EquiposService} from '../../../../../services/equipos.service';

@Component({
  selector: 'app-equipos-add',
  templateUrl: './equipos-add.page.html',
  styleUrls: ['./equipos-add.page.scss'],
})
export class EquiposAddPage implements OnInit {

  equipo: Equipos = {
    Nombre: '',
    Liga: this.ligaService.getTemp(),
    LigaId: this.activatedRoute.snapshot.paramMap.get('nombre')
  }
  constructor(private activatedRoute: ActivatedRoute,
              private ligaService: LigasService,
              private toastCtrl: ToastController,
              private equipoService: EquiposService,
              private router: Router) { }

  ngOnInit() {
  }

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    await toast.present();
  }

  addEquipo(){
    const url = '/home/ligas-list/ligas-info/' + this.equipo.LigaId;
    if (this.equipo.Nombre === ''){
      this.showToast('Por favor, rellene todos los campos');
    } else {
      this.equipoService.addEquipo(this.equipo).then(() => {
        this.router.navigateByUrl(url).then((e) => {
          if (e) {
            console.log('Navigation is successful!');
          } else {
            console.log('Navigation has failed!');
          }
          return false;
        });
        this.showToast('Equipo añadido a la ' + this.equipo.Liga);
      }, () => {
        this.showToast('Hubo un problema añadiendo al jugador');
      });
    }
  }
}
