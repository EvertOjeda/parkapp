import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';

export interface estaarena {
  descripcion : string
  name : string
  id : string
  img : string
}

@Injectable({
  providedIn: 'root'
})
export class EstaarenaService {

  constructor( private db : AngularFirestore) { }

  getEstapublic(){
    return this.db.collection('estaarena').snapshotChanges().pipe(map(estaarena =>{
      return estaarena.map(a => {
        const data = a.payload.doc.data() as estaarena; 
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

}