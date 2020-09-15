import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {


  darkmode: boolean = true;

  constructor() { 

    const prefersDark = window.matchMedia('(prefers-color-scheme:dark)');
    this.darkmode = prefersDark.matches;
  }

  cambio() {

   // const prefersDark = window.matchMedia('(prefers-color-scheme:dark)');
    this.darkmode = !this.darkmode;

      document.body.classList.toggle('dark');
  }

  ngOnInit() {
  }

}
