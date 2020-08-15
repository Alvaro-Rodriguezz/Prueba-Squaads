import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../services/authentication.service';
import {NavController} from '@ionic/angular';
import {JugadoresService} from '../services/jugadores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private authSvc: AuthenticateService,
              private navCtrl: NavController,
              ) {
  }

  ngOnInit() {
  }

}
