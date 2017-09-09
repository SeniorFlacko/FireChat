import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensaje:string = "";
  constructor( private chatService: ChatService ) { }

  ngOnInit() {
  }

  enviar(){
    console.log('Enviando...');
    if( this.mensaje.length == 0 ){
      return;
    }
    this.chatService.agregarMensaje( this.mensaje )
      .then( () => console.log('Hecho!') )
      .catch( ( error ) => console.error(error) )
    console.log(this.mensaje);
  }

}
