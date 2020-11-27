import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReturnpolicyComponent } from './home/returnpolicy/returnpolicy.component';
import { ProductsComponent } from './home/products/products.component';
import { BrandComponent } from './home/brand/brand.component';
import { BlogComponent } from './home/blog/blog.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { NewheaderComponent } from './header/newheader/newheader.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ErrorComponent } from './error/error.component';
import { ProductdetComponent } from './productdetails/productdet/productdet.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ListComponent } from './productlist/list/list.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ReturnpolicyComponent,
    ProductsComponent,
    BrandComponent,
    BlogComponent,
    CategoriesComponent,
    TestimonialsComponent,
    NewheaderComponent,
    ProductdetailsComponent,
    ErrorComponent,
    ProductdetComponent,
    ProductlistComponent,
    ListComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent,
    MyaccountComponent,
    LoginComponent,
    FaqComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
