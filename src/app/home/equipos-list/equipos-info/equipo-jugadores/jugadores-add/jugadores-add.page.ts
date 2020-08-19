import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Jugadores} from '../../../../../model/jugadores.model';
import {EquiposService} from '../../../../../services/equipos.service';
import {ToastController} from '@ionic/angular';
import {JugadoresService} from '../../../../../services/jugadores.service';
import {Observable} from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface MyData {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-jugadores-add',
  templateUrl: './jugadores-add.page.html',
  styleUrls: ['./jugadores-add.page.scss'],
})
export class JugadoresAddPage implements OnInit {

  task: AngularFireUploadTask;
  urlFoto = '';
  percentage: Observable<number>;

  snapshot: Observable<any>;

  UploadedFileURL: Observable<string>;

  images: Observable<MyData[]>;

  fileName: string;
  fileSize: number;

  isUploading: boolean;
  isUploaded: boolean;
  path = '';

  private imageCollection: AngularFirestoreCollection<MyData>;
  equipoId: string = this.activatedRoute.snapshot.paramMap.get('id');
  jugador: Jugadores = {
    Nombre: '',
    Apellidos: '',
    Equipo: this.equiposService.getGuardado(),
    Numero: '',
    Foto: '',
    EquipoId: this.equipoId
  }

  constructor(private activatedRoute: ActivatedRoute,
              private toastCtrl: ToastController,
              private router: Router,
              private equiposService: EquiposService,
              private jugadoresService: JugadoresService,
              private storage: AngularFireStorage,
              private database: AngularFirestore) {
    this.isUploading = false;
    this.isUploaded = false;
    this.imageCollection = database.collection<MyData>('imagenes');
    this.images = this.imageCollection.valueChanges();
  }

  ngOnInit() {

  }

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    await toast.present();
  }

  addJugador(){
    const url = '/home/equipos-list/equipos-info/' + this.equipoId;
    this.jugador.Foto = this.urlFoto;
    if (this.jugador.Nombre === '' || this.jugador.Apellidos === '' || this.jugador.Numero === '' || this.jugador.Foto === ''){
      this.showToast('Por favor, rellene todos los campos');
    } else {
      this.jugadoresService.addJugador(this.jugador).then(() => {
        this.router.navigateByUrl(url).then((e) => {
          if (e) {
            console.log('Navigation is successful!');
          } else {
            console.log('Navigation has failed!');
          }
          return false;
        });
        this.showToast('Jugador añadido al equipo ' + this.jugador.Equipo);
      }, () => {
        this.showToast('Hubo un problema añadiendo al jugador');
      });
    }
  }


  uploadFile(event: FileList) {
    const file = event.item(0)
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type')
      return;
    }

    this.isUploading = true;
    this.isUploaded = false;
    this.fileName = file.name;
    this.path = `imagenes/${new Date().getTime()}_${file.name}`;
    console.log(this.path);

    const customMetadata = { app: 'Storage Alvaro' };
    const fileRef = this.storage.ref(this.path);
    this.task = this.storage.upload(this.path, file, { customMetadata });

    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(

        finalize(() => {
          console.log(fileRef.getDownloadURL());
          this.UploadedFileURL = fileRef.getDownloadURL();
          console.log(this.UploadedFileURL);
          this.UploadedFileURL.subscribe(resp => {
            this.urlFoto = resp;
            console.log(resp);
            console.log('+'+this.urlFoto);
            this.addImagetoDB({
              name: file.name,
              filepath: resp,
              size: this.fileSize
            });
            this.isUploading = false;
            this.isUploaded = true;
          }, error => {
            console.error(error);
          });
        }),
        tap(snap => {
          this.fileSize = snap.totalBytes;
        })
    );
  }

  addImagetoDB(image: MyData) {
    const id = this.database.createId();
    this.imageCollection.doc(id).set(image).then(resp => {
      console.log('----'+resp);
    }).catch(error => {
      console.log( 'error ' + error);
    });
  }

}
