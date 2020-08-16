import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LigasService} from '../../../services/ligas.service';
import {Ligas} from '../../../model/ligas.model';

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
              private ligasService: LigasService) { }

  ngOnInit() {
    this.ligasService.getLigaId(this.ligaNombre).subscribe(liga => {
      this.liga = liga;
    });
  }

}
