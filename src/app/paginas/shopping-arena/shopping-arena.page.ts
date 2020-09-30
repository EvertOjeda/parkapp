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



  constructor(public estaarenaservice : EstaarenaService, private db: AngularFireDatabase) { }

  

          ngOnInit() {
            //para firestore
            this.estaarenaservice.getEstapublic().subscribe(estaarena =>{
            this.estaarena = estaarena;})


            //para realtime database
              this.itemRef = this.db.object('libre');
                this.itemRef.snapshotChanges().subscribe(action=> {
              
                    //Transformacion del object a otro object mas simple
                  this.valuecrud =  JSON.stringify(action.payload.val(),['value']);
                  
                    //Objeto simple formato {"value":95}
                  this.valueobject = JSON.parse(this.valuecrud)

                    //Extraccion del valor numerico del objeto asignando a la variable final
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
