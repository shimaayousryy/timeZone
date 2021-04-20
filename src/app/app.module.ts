import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LatestComponent } from './pages/latest/latest.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PagesComponent } from './pages/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SpinnerComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ShopComponent,
    LatestComponent,
    BlogComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
