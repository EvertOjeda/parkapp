import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';
import { environment } from "../environments/environment";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule), canActivate:[NologinGuard]
  },
  
  {
    path: 'acercade',
    loadChildren: () => import('./paginas/acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'shopping-arena',
    loadChildren: () => import('./paginas/shopping-arena/shopping-arena.module').then( m => m.ShoppingArenaPageModule)
  },
  {
    path: 'estapublic',
    loadChildren: () => import('./paginas/estapublic/estapublic.module').then( m => m.EstapublicPageModule)
  },
  {
    path: 'opciones',
    loadChildren: () => import('./paginas/opciones/opciones.module').then( m => m.OpcionesPageModule)
  },
  {
    path: 'shopping-zuni',
    loadChildren: () => import('./paginas/shopping-zuni/shopping-zuni.module').then( m => m.ShoppingZuniPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./componentes/registro/registro.module').then( m => m.RegistroPageModule), canActivate:[NologinGuard]
  },
  {
    path: 'reset-pass',
    loadChildren: () => import('./reset-pass/reset-pass.module').then( m => m.ResetPassPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
