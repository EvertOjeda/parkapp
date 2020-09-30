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
  s;
  
  p
  z


  values: object[] = [];

  constructor(public estaarenaservice : EstaarenaService, private db: AngularFireDatabase) { }

  

          ngOnInit() {
            //para firestore
            this.estaarenaservice.getEstapublic().subscribe(estaarena =>{
            this.estaarena = estaarena;})

            //para realtime database
              this.itemRef = this.db.object('libre');
                this.itemRef.snapshotChanges().subscribe(action=> {
              

                  this.s =  JSON.stringify(action.payload.val(),['value']);
                  
                  this.p = JSON.parse(this.s)
                 this.z = this.p.value;

                  console.log(this.s);
                  console.log(this.p);
                  console.log(this.z);

                  console.log(action.payload.val());
                  console.log(action);
                
                
                })

        

          }

          myAction() {
          
          }

}
