import { Component, OnInit } from '@angular/core';
import { EstazuniService, estazuni } from '../../servicios/estazuni.service';




@Component({
  selector: 'app-shopping-zuni',
  templateUrl: './shopping-zuni.page.html',
  styleUrls: ['./shopping-zuni.page.scss'],
})
export class ShoppingZuniPage implements OnInit {

  public estazuni : any = [];

  constructor(public estazuniservice : EstazuniService) { }

  ngOnInit() {
    this.estazuniservice.getEstapublic().subscribe(estazuni =>{
      
      this.estazuni = estazuni;
    })
  }

}
