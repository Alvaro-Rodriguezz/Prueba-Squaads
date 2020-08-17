import { Component, OnInit } from '@angular/core';
import {Ligas} from '../../../model/ligas.model';
import {LigasService} from '../../../services/ligas.service';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ligas-add',
  templateUrl: './ligas-add.page.html',
  styleUrls: ['./ligas-add.page.scss'],
})
export class LigasAddPage implements OnInit {

  liga: Ligas = {
    Nombre: ''
  }
  constructor(private ligasService: LigasService,
              private toastCtrl: ToastController,
              private router: Router) { }

  ngOnInit() {
  }

  add(){
    if (this.liga.Nombre === ''){
      this.showToast('Rellene todos los campos')
    } else {
      this.ligasService.addLiga(this.liga).then(() => {
        this.router.navigateByUrl('/home/ligas-list');
      });
      this.showToast('La liga fue añadida correctamente');
    }
  }

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
