import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LandingPageComponent } from './components/food/landing-page/landing-page.component';
import { AboutUsComponent } from './components/food/about-us/about-us.component';
import { NewComponent } from './components/partials/new/new.component';
import { ContactUsComponent } from './components/food/contact-us/contact-us.component';
import { ShopComponent } from './components/food/shop/shop.component';
import { CartComponent } from './components/food/cart/cart.component';
import { SingleNewsArticleComponent } from './components/food/single-news-article/single-news-article.component';
import { MoreNewsComponent } from './components/food/more-news/more-news.component';
import { CheckoutComponent } from './components/food/checkout/checkout.component';
import { SingleProductComponent } from './components/food/single-product/single-product.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'landing-page', component:LandingPageComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'new',component:NewComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'shop',component:ShopComponent},
  {path:'cart',component:CartComponent},
  {path:'single-news',component:SingleNewsArticleComponent},
  {path:'more-news',component:MoreNewsComponent},
  {path:'check-out',component:CheckoutComponent},
  {path:'single-product',component:SingleProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
