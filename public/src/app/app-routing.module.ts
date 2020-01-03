import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CartComponent } from './cart/cart.component';
import { ViewComponent } from './view/view.component';
import { AllComponent } from './all/all.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SellComponent } from './sell/sell.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: "", component: HomeComponent},
  {path: "sell", component: SellComponent},
  {path: "browse", component: AllComponent},
  {path: "browse/view/:id", component: ViewComponent},
  {path: "cart", component: CartComponent},
  {path: "confirm", component: ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
