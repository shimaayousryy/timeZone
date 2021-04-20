import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { async } from 'rxjs';

// preloading routing to change pages fast 
const routes: Routes = [
  {path:'' , loadChildren:async()=>(await import('./pages/home/home-routing.module')).HomeRoutingModule},
  {path:'home' , loadChildren:async()=> (await import('./pages/home/home-routing.module')).HomeRoutingModule},
  {path:'shop' , loadChildren:async()=>(await import ('./pages/shop/shop-routing.module')).ShopRoutingModule},
  {path:'aboutus' , loadChildren:async() =>(await import('./pages/aboutus/aboutus-routing.module')).AboutusRoutingModule},
  {path:'contactus' , loadChildren:async () =>(await import('./pages/contactus/contactus-routing.module')).ContactusRoutingModule},
  {path:'**' , loadChildren:async()=>(await import('./pages/home/home-routing.module')).HomeRoutingModule}
];

@NgModule({
  // adding preloading strategy
  imports: [RouterModule.forRoot(routes , {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
