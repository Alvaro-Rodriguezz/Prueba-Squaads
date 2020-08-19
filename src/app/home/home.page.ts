import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../services/authentication.service';
import {AlertController, NavController} from '@ionic/angular';
import {JugadoresService} from '../services/jugadores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userEmail: string;
  constructor(private authService: AuthenticateService,
              private navCtrl: NavController,
              private alertController: AlertController
              ) {
  }

  ngOnInit() {
    if (this.authService.userDetails()) {
      this.userEmail = this.authService.userDetails().email;
    } else {
      this.navCtrl.navigateBack('').then((e) => {
        if (e) {
          console.log('Navigation is successful!');
        } else {
          console.log('Navigation has failed!');
        }
        return false;
      });
    }
  }


  async usuarioAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario',
      subHeader: this.userEmail,
      buttons: ['Cerrar']
    });

    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

  logout() {
    this.authService.logoutUser()
        .then(res => {
          this.navCtrl.navigateBack('/login')
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
  }
}
