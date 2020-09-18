import { Component, OnInit } from '@angular/core';
import { EstaarenaService, estaarena } from '../../servicios/estaarena.service';
import { NavController } from "@ionic/angular";

import * as firebase from 'firebase';
import { snapshotToArray } from "../../../environments/environment";


@Component({
  selector: 'app-shopping-arena',
  templateUrl: './shopping-arena.page.html',
  styleUrls: ['./shopping-arena.page.scss'],
})


export class ShoppingArenaPage implements OnInit {

  items = [];
  ref = firebase.database().ref('items/');
  inputText:string='';
  
  public estaarena : any = [];

  constructor(public estaarenaservice : EstaarenaService, public navCtrl: NavController) { 
    this.ref.on('value', resp=>{
      this.items = snapshotToArray(resp);
    });
  }


  ngOnInit() {
    this.estaarenaservice.getEstapublic().subscribe(estaarena =>{
      
      this.estaarena = estaarena;
      })
  }

  addItem(item) {
    if(item!==undefined && item!==null){
       let newItem = this.ref.push();
       newItem.set(item);
   }
  }

  myAction() {
  
  }

}
