import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';

export interface estapublic {
  descripcion : string
  name : string
  id : string
  img : string
}

@Injectable({
  providedIn: 'root'
})
export class EstapublicService {

  constructor( private db : AngularFirestore) { }

  getEstapublic(){
    return this.db.collection('estapublic').snapshotChanges().pipe(map(estapublic =>{
      return estapublic.map(a => {
        const data = a.payload.doc.data() as estapublic; 
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

}
