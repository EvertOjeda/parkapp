import { Component, OnInit } from '@angular/core';
import { EstaarenaService, estaarena } from '../../servicios/estaarena.service';




@Component({
  selector: 'app-shopping-arena',
  templateUrl: './shopping-arena.page.html',
  styleUrls: ['./shopping-arena.page.scss'],
})
export class ShoppingArenaPage implements OnInit {

  public estaarena : any = [];

  constructor(public estaarenaservice : EstaarenaService) { }

  

  ngOnInit() {
    this.estaarenaservice.getEstapublic().subscribe(estaarena =>{
      
      this.estaarena = estaarena;
      })
  }

  myAction() {
  
  }

}
