import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductComponent } from './components/product/product.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ReviewComponent } from './components/review/review.component';
import { HeaderComponent } from './components/header/header.component';
import { SeachBarComponent } from './components/seach-bar/seach-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    CartComponent,
    FooterComponent,
    WelcomeComponent,
    ProductComponent,
    ProductListComponent,
    ProductCardComponent,
    HeroComponent,
    HomeComponent,
    CallToActionComponent,
    PrivacyComponent,
    ReviewComponent,
    SeachBarComponent,
    HeaderComponent,
    SearchResultsComponent
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
