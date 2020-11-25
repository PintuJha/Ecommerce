import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'productdetails', component:ProductdetailsComponent},
  {path:'productlist', component:ProductlistComponent},
  {path:'cart', component:CartComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'myaccount', component:MyaccountComponent},
  {path:'login', component:LoginComponent},
  {path:'faq', component:FaqComponent},



  {path:'**', component:ErrorComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
