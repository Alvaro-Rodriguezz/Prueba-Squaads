import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LigasService} from '../../../services/ligas.service';
import {Ligas} from '../../../model/ligas.model';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-ligas-info',
  templateUrl: './ligas-info.page.html',
  styleUrls: ['./ligas-info.page.scss'],
})
export class LigasInfoPage implements OnInit {

  ligaNombre: string = this.activatedRoute.snapshot.paramMap.get('nombre');
  liga: Ligas = {
    Nombre: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
              private ligasService: LigasService,
              private router: Router,
              private toastController: ToastController) { }

  ngOnInit() {
    this.ligasService.getLigaId(this.ligaNombre).subscribe(liga => {
      this.liga = liga;
    });
  }
  
  showToast(msg) {
    this.toastController.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
  
  eliminarLiga(){
    this.ligasService.deleteLiga(this.liga.id).then(() => {
      this.router.navigateByUrl('/home/ligas-list');
      this.showToast('Liga eliminada');
    }, err => {
      const msg = 'Error: ' + err;
      this.showToast(msg);
    });

  }
}
