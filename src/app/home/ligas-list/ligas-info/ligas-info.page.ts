import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Equipos} from '../../../model/equipos.model';
import {Observable} from 'rxjs';
import {EquiposService} from '../../../services/equipos.service';

@Component({
  selector: 'app-ligas-info',
  templateUrl: './ligas-info.page.html',
  styleUrls: ['./ligas-info.page.scss'],
})
export class LigasInfoPage implements OnInit {

  ligaNombre: string = this.activatedRoute.snapshot.paramMap.get('info');
  private equipos: Observable<Equipos[]>;
  constructor(private activatedRoute: ActivatedRoute,
              private equiposService: EquiposService) { }

  ngOnInit() {
    this.equipos = this.equiposService.getEquipoOfLiga(this.ligaNombre);
  }

}
