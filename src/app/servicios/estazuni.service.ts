import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';

export interface estazuni {
  descripcion : string
  name : string
  id : string
  img : string
}

@Injectable({
  providedIn: 'root'
})
export class EstazuniService {

  constructor( private db : AngularFirestore) { }

  getEstapublic(){
    return this.db.collection('estazuni').snapshotChanges().pipe(map(estazuni =>{
      return estazuni.map(a => {
        const data = a.payload.doc.data() as estazuni; 
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

}