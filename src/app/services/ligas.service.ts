import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
import {Ligas} from 'src/app/model/ligas.model';


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
}
