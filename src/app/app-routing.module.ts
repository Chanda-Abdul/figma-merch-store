import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { HomeComponent } from './component/home/home.component';
import { PrivacyComponent } from './component/privacy/privacy.component';
import { SearchResultsComponent } from './component/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product/:productId',
    component: ProductComponent
  },
  {
    path: "find/:searchTerm",
    component: SearchResultsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyComponent
  },
  {
    path: '**',
    redirectTo: '/'
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
