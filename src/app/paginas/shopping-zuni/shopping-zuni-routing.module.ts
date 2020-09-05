import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingZuniPage } from './shopping-zuni.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingZuniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingZuniPageRoutingModule {}
