import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingArenaPageRoutingModule } from './shopping-arena-routing.module';

import { ShoppingArenaPage } from './shopping-arena.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

import { AngularFireDatabase,
        AngularFireDatabaseModule } from "angularfire2/database";

import { AngularFireModule } from "@angular/fire";
import { environment } from '../../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingArenaPageRoutingModule,
    ComponentesModule,
    AngularFireModule.initializeApp(environment.firebase),
   AngularFireDatabaseModule 
  ],
  providers:[ AngularFireDatabase],
  declarations: [ShoppingArenaPage]
})
export class ShoppingArenaPageModule {}
