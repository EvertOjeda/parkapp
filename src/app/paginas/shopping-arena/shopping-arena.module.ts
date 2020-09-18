import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingArenaPageRoutingModule } from './shopping-arena-routing.module';

import { ShoppingArenaPage } from './shopping-arena.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingArenaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ShoppingArenaPage]
})
export class ShoppingArenaPageModule {}
