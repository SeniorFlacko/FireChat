import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable()
export class ChatService {
  chats: FirebaseListObservable<any[]>;
  usuario: any = {
    nombre: "Juan Carlos"
  };

  constructor(private db: AngularFireDatabase) {
    this.chats = db.list('/chats');
  }

  agregarMensaje( texto:string ){
    let mensaje: Mensaje = {
      nombre: "Juan Carlos",
      mensaje: texto
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
}
