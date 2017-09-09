import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Mensaje } from '../interfaces/mensaje.interface';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {
  chats: FirebaseListObservable<any[]>;
  usuario: any = null;

  constructor(private db: AngularFireDatabase,public afAuth: AngularFireAuth) {
    this.chats = db.list('/chats');
    if( localStorage.getItem('usuario') ){
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    }
  }

  agregarMensaje( texto:string ){
    let mensaje: Mensaje = {
      nombre: this.usuario.displayName,
      mensaje: texto,
      uid: this.usuario.uid
    }

    return this.chats.push( mensaje );
  }

  cargarMensajes(){
    this.chats = this.db.list('/chats',{
      query:{
        limitToLast: 20,
        orderByKey: true
      }
    });

    return this.chats;
  }

  login( proveedor: string ) {
    let provider;

    if( proveedor == "google" ){
      provider = new firebase.auth.GoogleAuthProvider();
    }
    else{
      provider = new firebase.auth.TwitterAuthProvider();
    }

    this.afAuth.auth.signInWithPopup( provider ).then( response => {
      this.usuario = response.user;
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('usuario');
    this.usuario = null;
  }

}
