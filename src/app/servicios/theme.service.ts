import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

const THEME_KEY = "selected-app-theme"

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode=false;

  constructor(private plt: Platform) { 
    this.plt.ready().then(()=> {
      const prefersDark=window.matchMedia("(prefers-color-scheme: dark)");
    prefersDark.addListener(e => {
      console.log('matches: ',e);
        this.setAppTheme(e.matches);
    }); 
  })
  }

  toggleAppTheme(){
    this.darkMode = !this.darkMode;
    this.setAppTheme(this.darkMode);
  }

  setAppTheme(dark){
    this.darkMode = dark;

    if (this.darkMode) {
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }

    //if(this.darkMode){
      //this.statusBar.styleBlackOpaque();
      //this.statusBar.backgroundColorByHexString("#000000");
    //}else{
      //this.statusBar.styleDefault();
      //this.statusBar.backgroundColorByHexString("#ffffff");
    //}
  }
}
