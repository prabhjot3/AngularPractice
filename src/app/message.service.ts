import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }
  messages:string[]=[];
  getMessage(message:string){
    this.messages.push(message);
  }
  clearMessage(){
    this.messages = [];
  }

}
