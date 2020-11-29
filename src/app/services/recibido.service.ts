import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Document} from '../models/Document'
@Injectable({
  providedIn: 'root'
})
export class RecibidoService {

  recibidoList !: AngularFireList<any>; 

   selectDocument: Document= new Document();

  constructor(private firebase: AngularFireDatabase) {
   
   }

  getRecibido(){
    return this.recibidoList = this.firebase.list('document');
  }

  setRecibido(document: Document){
    this.recibidoList.push({
      name: document.name,
      type: document.type
    });
  }

  update(document: Document){
    this.recibidoList.update(document.$key,{
      name: document.name,
      type: document.type
    })
  }

  delete($key: string){
    this.recibidoList.remove($key);
  }
}
