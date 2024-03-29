import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { AboutComponent } from './component/about/about.component';
import { CartComponent } from './component/cart/cart.component';
import { FooterComponent } from './component/footer/footer.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HeroComponent } from './component/hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductComponent } from './component/product/product.component';
import { CallToActionComponent } from './component/call-to-action/call-to-action.component';
import { PrivacyComponent } from './component/privacy/privacy.component';
import { ReviewComponent } from './component/review/review.component';
import { HeaderComponent } from './component/header/header.component';
import { searchBarComponent } from './component/search-bar/search-bar.component';
import { SearchResultsComponent } from './component/search-results/search-results.component';
import { CurrencyConversionPipe } from './pipes/currency-conversion.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgeComponent } from './component/badge/badge.component';
import { DraggableSliderDirective } from './directives/draggable-slider.directive';
import { HoverImgSwapDirective } from './directives/hover-img-swap.directive';
import { MarqueeDirective } from './directives/marquee.directive';
import { AppearOnScrollDirective } from './directives/appear-on-scroll.directive';
import { SizeChartComponent } from './component/size-chart/size-chart.component';
import { IdleScreenSnowfallDirective } from './directives/idle-screen-snowfall.directive';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';
import { HideShowNavDirective } from './directives/hide-show-nav.directive';


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
    searchBarComponent,
    HeaderComponent,
    SearchResultsComponent,
    CurrencyConversionPipe,
    BadgeComponent,
    DraggableSliderDirective,
    HoverImgSwapDirective,
    MarqueeDirective,
    AppearOnScrollDirective,
    SizeChartComponent,
    IdleScreenSnowfallDirective,
    FilterByCategoryPipe,
    HideShowNavDirective],
    
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
