import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Equipos} from '../../../../model/equipos.model';
import {ActivatedRoute} from '@angular/router';
import {EquiposService} from '../../../../services/equipos.service';

@Component({
  selector: 'app-liga-equipos',
  templateUrl: './liga-equipos.page.html',
  styleUrls: ['./liga-equipos.page.scss'],
})
export class LigaEquiposPage implements OnInit {

  ligaNombre: string = this.activatedRoute.snapshot.paramMap.get('nombre');
  private equipos: Observable<Equipos[]>;
  constructor(private activatedRoute: ActivatedRoute,
              private equiposService: EquiposService) { }

  ngOnInit() {
    this.equipos = this.equiposService.getEquipoOfLiga(this.ligaNombre);
  }

}
