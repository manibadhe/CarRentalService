import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {CarbookComponent} from './booking/carbook/carbook.component'
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { AddashComponent } from './Admin/addash/addash.component';
import { UserdashComponent } from './User/userdash/userdash.component';
import { BookingComponent } from './Admin/booking/booking.component';
import { CustomersComponent } from './Admin/customers/customers.component';
import { CarComponent } from './Admin/car/car.component';
import { CarreviewComponent } from './Admin/carreview/carreview.component';
import { DriverComponent } from './Admin/driver/driver.component';
import { DriverreviewComponent } from './Admin/driverreview/driverreview.component';
import { FeedbackComponent } from './Admin/feedback/feedback.component';
import { UserbookingComponent } from './User/userbooking/userbooking.component';
import { AdloginComponent } from './Admin/adlogin/adlogin.component';
import { UsercarreviewComponent } from './User/usercarreview/usercarreview.component';
import { UserdriverrevComponent } from './User/userdriverrev/userdriverrev.component';
import { UserfeedComponent } from './User/userfeed/userfeed.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'addash',
    pathMatch: 'full',
    component: AddashComponent
  },
  {
    path: 'carbook',
    pathMatch: 'full',
    component: CarbookComponent
  },
  {
    path: 'contactus',
    pathMatch: 'full',
    component: ContactusComponent
  },
  {
    path: 'about-us',
    pathMatch: 'full',
    component: AboutUSComponent
  },
  {
    path: 'userdash',
    pathMatch: 'full',
    component: UserdashComponent
  },
  {
    path: 'booking',
    pathMatch: 'full',
    component: BookingComponent
  },
  {
    path: 'customers',
    pathMatch: 'full',
    component: CustomersComponent
  },
  {
    path: 'car',
    pathMatch: 'full',
    component: CarComponent
  },
  {
    path: 'carreview',
    pathMatch: 'full',
    component: CarreviewComponent
  },
  {
    path: 'driver',
    pathMatch: 'full',
    component: DriverComponent
  },
  {
    path: 'driverreview',
    pathMatch: 'full',
    component: DriverreviewComponent
  },
  {
    path: 'feedback',
    pathMatch: 'full',
    component: FeedbackComponent
  },
  {
    path: 'userbooking',
    pathMatch: 'full',
    component: UserbookingComponent
  },
  {
    path: 'adlogin',
    pathMatch: 'full',
    component: AdloginComponent
  },
  {
    path: 'usercarreview',
    pathMatch: 'full',
    component: UsercarreviewComponent
  },
  {
    path: 'userdriverrev',
    pathMatch: 'full',
    component: UserdriverrevComponent
  },
  {
    path: 'userfeed',
    pathMatch: 'full',
    component: UserfeedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
