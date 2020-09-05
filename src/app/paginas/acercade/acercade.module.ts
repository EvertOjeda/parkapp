import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcercadePageRoutingModule } from './acercade-routing.module';

import { AcercadePage } from './acercade.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcercadePageRoutingModule,
    ComponentesModule
  ],
  declarations: [AcercadePage]
})
export class AcercadePageModule {}
