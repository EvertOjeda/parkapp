import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstapublicPage } from './estapublic.page';

const routes: Routes = [
  {
    path: '',
    component: EstapublicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstapublicPageRoutingModule {}
