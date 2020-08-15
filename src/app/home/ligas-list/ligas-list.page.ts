import { Component, OnInit } from '@angular/core';
import {LigasService} from '../../services/ligas.service';
import {Observable} from 'rxjs';
import {Ligas} from '../../model/ligas.model';

@Component({
  selector: 'app-ligas-list',
  templateUrl: './ligas-list.page.html',
  styleUrls: ['./ligas-list.page.scss'],
})
export class LigasListPage implements OnInit {

  private ligas: Observable<Ligas[]>;
  constructor(private ligasService: LigasService) { }

  ngOnInit() {
    this.ligas = this.ligasService.getLigas();
    console.log(this.ligas);
  }

}
