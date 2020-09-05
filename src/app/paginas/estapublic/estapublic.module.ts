import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstapublicPageRoutingModule } from './estapublic-routing.module';

import { EstapublicPage } from './estapublic.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstapublicPageRoutingModule,
    ComponentesModule
  ],
  declarations: [EstapublicPage]
})
export class EstapublicPageModule {}
