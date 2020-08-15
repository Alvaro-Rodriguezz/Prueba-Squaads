import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
import {Jugadores} from '../model/jugadores.model';


@Injectable({
    providedIn: 'root'
})
export class JugadoresService {
    private Jugadores: Observable<Jugadores[]>;
    private jugadoresCollection: AngularFirestoreCollection<Jugadores>;
    constructor(private angularFirestore: AngularFirestore) {
        this.jugadoresCollection = this.angularFirestore.collection<Jugadores>('Jugadores');
        this.Jugadores = this.jugadoresCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data};
                });
            })
        );
    }

    getJugadores(){
        return this.Jugadores;
    }
}
