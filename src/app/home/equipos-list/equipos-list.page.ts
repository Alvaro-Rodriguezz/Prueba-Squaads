import { Component, OnInit } from '@angular/core';
import {EquiposService} from '../../services/equipos.service';
import {Observable} from 'rxjs';
import {Equipos} from '../../model/equipos.model';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.page.html',
  styleUrls: ['./equipos-list.page.scss'],
})
export class EquiposListPage implements OnInit {

  private equipos: Observable<Equipos[]>
  constructor(private equiposService: EquiposService) { }

  ngOnInit() {
    this.equipos = this.equiposService.getEquipos();
  }

}
