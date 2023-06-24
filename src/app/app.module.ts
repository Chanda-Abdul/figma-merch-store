import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ProductComponent } from './components/product/product/product.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShoppingComponent,
    AboutComponent,
    CartComponent,
    FooterComponent,
     WelcomeComponent,
     InventoryComponent,
     ProductComponent,
     ProductDetailsComponent,
     HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
