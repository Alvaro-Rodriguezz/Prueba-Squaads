import { Pipe, PipeTransform } from '@angular/core';
import {Jugadores} from '../../model/jugadores.model';

@Pipe({
  name: 'jugadoresPipe'
})
export class JugadoresPipePipe implements PipeTransform {

  transform(value: any[], arg1: any, arg2: any): unknown {
    console.log((Object.keys(value[0])))
    console.log(Object.keys(value[0])[1]);
    return value.filter(val => val.arg1.includes('t'));
  }

}
