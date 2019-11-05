import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(mod => mod.ProductsModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then(mod => mod.SettingsModule),
  },
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
