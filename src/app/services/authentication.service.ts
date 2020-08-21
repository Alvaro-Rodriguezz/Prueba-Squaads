import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class AuthenticateService {
    public isLogged: any = false;

    constructor(public afAuth: AngularFireAuth) {
        afAuth.authState.subscribe(user => (this.isLogged = user));
    }

    // Devolviendo directamente la promesa de firebase.aut().signInWithEmailAndPassword no
    // se pierde el tipado. Creando una nueva promesa que no especifica que está devolviendo
    // typescript la entenderá como Promise<any>. De esta forma de aquí, tenemos también una
    // promesa pero en este caso si está tipada la salida de la promesa y se podrán también
    // recoger errores de la misma forma
    loginUser(value) {
        return firebase.auth().signInWithEmailAndPassword(value.email, value.password)
    }

    registerUser(value) {
        return new Promise<any>((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
                .then(
                    res => resolve(res),
                    err => reject(err));
        });
    }
    logoutUser() {
        return new Promise((resolve, reject) => {
            if (firebase.auth().currentUser) {
                firebase.auth().signOut()
                    .then(() => {
                        console.log('LOG Out');
                        resolve();
                    }).catch((error) => {
                    reject();
                });
            }
        });
    }


    // A veces tampoco está de más tipar las funciones aunque typescript
    // ya sepa lo que devuelve. Lo hace más sencillo de leer el servicio
    userDetails() : firebase.User {
        return firebase.auth().currentUser;
    }
}
