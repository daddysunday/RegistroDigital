import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-empresa',
    loadChildren: () => import('./add-empresa/add-empresa.module').then( m => m.AddEmpresaPageModule)
  },
  {
    path: 'add-articulo',
    loadChildren: () => import('./add-articulo/add-articulo.module').then( m => m.AddArticuloPageModule)
  },
  {
    path: 'vender',
    loadChildren: () => import('./vender/vender.module').then( m => m.VenderPageModule)
  },
  {
    path: 'imprimir',
    loadChildren: () => import('./imprimir/imprimir.module').then( m => m.ImprimirPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
