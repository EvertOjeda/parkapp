import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {


  darkMode: boolean = true;

  constructor() { 

    const prefersDark = window.matchMedia('(prefers-color-scheme:dark)');
    this.darkMode = prefersDark.matches;
  }

  cambio() {

   // const prefersDark = window.matchMedia('(prefers-color-scheme:dark)');
    this.darkMode = !this.darkMode;

      document.body.classList.toggle('dark');
  }

  ngOnInit() {
  }

}
