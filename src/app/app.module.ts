import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from './services/interceptor/jwt.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeadComponent } from './components/layout/head/head.component';
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
import { LoginComponent } from './components/food/auth/login/login.component';
import { SignUpComponent } from './components/food/auth/sign-up/sign-up.component';
import { TestService } from './test.service';
import { TestPipe } from './test.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    FooterComponent,
    HeadComponent,
    LandingPageComponent,
    AboutUsComponent,
    NewComponent,
    ContactUsComponent,
    ShopComponent,
    CartComponent,
    SingleNewsArticleComponent,
    MoreNewsComponent,
    CheckoutComponent,
    SingleProductComponent,
    LoginComponent,
    SignUpComponent,
    TestPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [ TestService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
