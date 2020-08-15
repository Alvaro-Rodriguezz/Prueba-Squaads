import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
import {Equipos} from '../model/equipos.model';


@Injectable({
    providedIn: 'root'
})
export class EquiposService {
    private Equipos: Observable<Equipos[]>;
    private equiposCollection: AngularFirestoreCollection<Equipos>;
    constructor(private angularFirestore: AngularFirestore) {
        this.equiposCollection = this.angularFirestore.collection<Equipos>('Equipos');
        this.Equipos = this.getData();
    }

    getEquipoOfLiga(liga: string): Observable<Equipos[]>{
        this.equiposCollection = this.angularFirestore.collection<Equipos>('Equipos', ref => {
            return ref.where('Liga', '==', liga);
        });
        return this.getData();
    }

    getData(){
        return this.equiposCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data};
                });
            })
        );
    }

    getEquipos(){
        return this.Equipos;
    }
}
