import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { GalleryProductsComponent } from './shared/components/gallery-products/gallery-products.component';
import { SingleProductComponent } from './shared/components/single-product/single-product.component';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomePageComponent,
    ProductosComponent,
    GestionComponent,
    GalleryProductsComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RatingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
