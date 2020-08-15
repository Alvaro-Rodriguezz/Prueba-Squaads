import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map, take} from 'rxjs/operators';
import {Ligas} from 'src/app/model/ligas.model';
import DocumentReference = firebase.firestore.DocumentReference;
import * as firebase from 'firebase';


@Injectable({
    providedIn: 'root'
})
export class LigasService {
    private Ligas: Observable<Ligas[]>;
    private ligasCollection: AngularFirestoreCollection<Ligas>;
    constructor(private angularFirestore: AngularFirestore) {
        this.ligasCollection = this.angularFirestore.collection<Ligas>('Ligas');
        this.Ligas = this.ligasCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data};
                });
            })
        );
    }

    getLigas(){
        return this.Ligas;
    }

    getLigaNombre(Nombre: string): Observable<Ligas> {
        return this.ligasCollection.doc<Ligas>(Nombre).valueChanges().pipe(
            take(1),
            map(liga => {
                liga.Nombre = Nombre;
                return liga;
            })
        );
    }

    addLiga(liga: Ligas): Promise<DocumentReference>{
        return this.ligasCollection.add(liga);
    }

    deleteLiga(id: string): Promise<void>{
        return this.ligasCollection.doc(id).delete();
    }
}
