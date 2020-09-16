import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from 'src/app/servicios/theme.service';

const themes={
  autumn:{
    primary: '#F78154',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876'
  },
  night: {
    primary: '#428cff',
    secondary: '#50c8ff',
    tertiary: '#6a64ff',
    medium: '#989aa2',
    dark: '#f4f5f8',
    light: '#222428'
  },
  neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A'

  },
}



@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {

  ngOnInit() {
  } 

  constructor(private renderer: Renderer2, private theme:ThemeService) {}

  changeTheme(name){
    this.theme.setTheme(themes[name]);
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
