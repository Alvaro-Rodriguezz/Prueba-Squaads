import { Pipe, PipeTransform } from '@angular/core';
import {Jugadores} from '../../model/jugadores.model';

@Pipe({
  name: 'jugadoresPipe'
})
export class JugadoresPipePipe implements PipeTransform {

  transform(value: any[], arg1: any, arg2: any): unknown {
    return value.map(valu => valu).filter((item) => item[arg1].includes(arg2));
  }

}
