import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { EstaarenaService, estaarena } from '../../servicios/estaarena.service';




@Component({
  selector: 'app-shopping-arena',
  templateUrl: './shopping-arena.page.html',
  styleUrls: ['./shopping-arena.page.scss'],
})
export class ShoppingArenaPage implements OnInit {

  itemRef: any;
  libre:[];

  public homePage : [];

 // vm = this;

 //vm.libres : [];

  public estaarena : any = [];
  
  valuecrud
  valueobject
  valuefinal


  values: object[] = [];

  constructor(public estaarenaservice : EstaarenaService, private db: AngularFireDatabase) { }

  

          ngOnInit() {
            //para firestore
            this.estaarenaservice.getEstapublic().subscribe(estaarena =>{
            this.estaarena = estaarena;})

            //para realtime database
              this.itemRef = this.db.object('libre');
                this.itemRef.snapshotChanges().subscribe(action=> {
              

                this.valuecrud =  JSON.stringify(action.payload.val(),['value']);
                  
                  this.valueobject = JSON.parse(this.valuecrud)
                  this.valuefinal = this.valueobject.value;

                  console.log(this.valuecrud);
                  console.log(this.valueobject);
                  console.log(this.valuefinal);

                  console.log(action.payload.val());
                  console.log(action);
                
                
                })

        

          }

          myAction() {
          
          }

}
