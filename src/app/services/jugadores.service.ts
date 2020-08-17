import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map, take} from 'rxjs/operators';
import {Jugadores} from '../model/jugadores.model';
import DocumentReference = firebase.firestore.DocumentReference;
import * as firebase from 'firebase';


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
    getJugadoresOfEquipo(equipoId: string): Observable<Jugadores[]>{
        this.jugadoresCollection = this.angularFirestore.collection<Jugadores>('Jugadores', ref => {
            return ref.where('EquipoId', '==', equipoId);
        });
        return this.getData();
    }

    getData(){
        return this.jugadoresCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data};
                });
            })
        );
    }
    getJugadorId(id: string): Observable<Jugadores> {
        return this.jugadoresCollection.doc<Jugadores>(id).valueChanges().pipe(
            take(1),
            map(lugar => {
                lugar.id = id;
                return lugar;
            })
        );
    }

    getJugadores(){
        return this.Jugadores;
    }

    addJugador(jugador: Jugadores): Promise<DocumentReference>{
        return this.jugadoresCollection.add(jugador);
    }

    deleteJugador(id: string): Promise<void>{
        return this.jugadoresCollection.doc(id).delete();
    }
}
