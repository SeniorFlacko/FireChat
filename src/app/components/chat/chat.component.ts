import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensaje:string = "";
  elemento:any;

  constructor( public chatService: ChatService ) {
    this.chatService.cargarMensajes().subscribe( () => {
      console.log('Mensajes Cargados...');
      
      setTimeout( () => {
        this.elemento.scrollTop = this.elemento.scrollHeight
      }, 100 );
      
    })
  }

  ngOnInit() {
    this.elemento = document.getElementById("app-mensajes");
  }

  enviar(){
    console.log('Enviando...');
    if( this.mensaje.length == 0 ){
      return;
    }
    this.chatService.agregarMensaje( this.mensaje )
      .then( () => console.log('Hecho!') )
      .catch( ( error ) => console.error(error) )
    this.mensaje = "";
  }

}
