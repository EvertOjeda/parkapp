import { Component, OnInit } from '@angular/core';
import { EstapublicService, estapublic } from '../../servicios/estapublic.service';




@Component({
  selector: 'app-estapublic',
  templateUrl: './estapublic.page.html',
  styleUrls: ['./estapublic.page.scss'],
})
export class EstapublicPage implements OnInit {

  public estapublic : any = [];

  constructor(public estapublicservice : EstapublicService) { }

  ngOnInit() {
    this.estapublicservice.getEstapublic().subscribe(estapublic =>{
      
      this.estapublic = estapublic;
    })
  }

}
