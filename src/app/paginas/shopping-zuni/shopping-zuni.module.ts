import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingZuniPageRoutingModule } from './shopping-zuni-routing.module';

import { ShoppingZuniPage } from './shopping-zuni.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingZuniPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ShoppingZuniPage]
})
export class ShoppingZuniPageModule {}
