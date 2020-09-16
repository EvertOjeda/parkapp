import { Component, OnInit, Renderer2 } from '@angular/core';





@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {

  ngOnInit() {
  } 

  constructor(private renderer: Renderer2) {
     
  }

  onToggleColorTheme(event) {
    console.log(event.detail.checked);

    if(event.detail.checked){
      //document.body.setAttribute('color-theme', 'dark');
      this.renderer.setAttribute(document.body, 'color-theme', 'dark')
    }else{
      //document.body.setAttribute('color-theme', 'light');

      this.renderer.setAttribute(document.body, 'color-theme', 'light')
    }
  }
 
}
