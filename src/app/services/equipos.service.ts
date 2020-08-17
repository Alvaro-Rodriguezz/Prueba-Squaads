import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map, take} from 'rxjs/operators';
import {Equipos} from '../model/equipos.model';
import DocumentReference = firebase.firestore.DocumentReference;
import * as firebase from 'firebase';


@Injectable({
    providedIn: 'root'
})
export class EquiposService {
    private guardado: any;
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

    getEquipoId(id: string): Observable<Equipos> {
        return this.equiposCollection.doc<Equipos>(id).valueChanges().pipe(
            take(1),
            map(equipo => {
                equipo.id = id;
                return equipo;
            })
        );
    }
    getEquipos(){
        return this.Equipos;
    }

    setGuardado(elemento: any){
        this.guardado = elemento;
    }

    getGuardado(){
        return this.guardado;
    }

    addEquipo(equipo: Equipos): Promise<DocumentReference>{
        return this.equiposCollection.add(equipo);
    }

    deleteEquipo(id: string): Promise<void>{
        return this.equiposCollection.doc(id).delete();
    }
}
