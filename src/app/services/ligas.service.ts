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
    temp: any;
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

    getLigaId(id: string): Observable<Ligas> {
        console.log(id);
        return this.ligasCollection.doc<Ligas>(id).valueChanges().pipe(
            take(1),
            map(liga => {
                console.log('*');
                console.log(liga)
                console.log('---');
                console.log(liga.Nombre)
                liga.id = id;
                return liga;
            })
        );
    }

    getLigaNombre(Nombre: string): Observable<Ligas> {
        console.log('*' + Nombre + '*');
        return this.ligasCollection.doc<Ligas>().valueChanges().pipe(
            take(1),
            map(liga => {
                console.log(liga.Nombre)
                liga.Nombre = Nombre;
                console.log(liga.Nombre)
                return liga;
            })
        );
    }

    addLiga(liga: Ligas): Promise<DocumentReference>{
        return this.ligasCollection.add(liga);
    }

    deleteLiga(id: string): Promise<void>{
        //eliminar equipos
        return this.ligasCollection.doc(id).delete();
    }

    setTemp(temp: any){
        this.temp = temp;
    }

    getTemp(){
        return this.temp;
    }
}
