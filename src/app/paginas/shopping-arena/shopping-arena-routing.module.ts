import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingArenaPage } from './shopping-arena.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingArenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingArenaPageRoutingModule {}
