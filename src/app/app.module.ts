import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { CarbookComponent } from './booking/carbook/carbook.component';
import { AdloginComponent } from './Admin/adlogin/adlogin.component';
import { AddashComponent } from './Admin/addash/addash.component';
import { BookingComponent } from './Admin/booking/booking.component';
import { CustomersComponent } from './Admin/customers/customers.component';
import { DriverComponent } from './Admin/driver/driver.component';
import { CarComponent } from './Admin/car/car.component';
import { CarreviewComponent } from './Admin/carreview/carreview.component';
import { DriverreviewComponent } from './Admin/driverreview/driverreview.component';
import { FeedbackComponent } from './Admin/feedback/feedback.component';
import { UserdashComponent } from './User/userdash/userdash.component';
import { UserbookingComponent } from './User/userbooking/userbooking.component';
import { UsercarreviewComponent } from './User/usercarreview/usercarreview.component';
import { UserdriverrevComponent } from './User/userdriverrev/userdriverrev.component';
import { UserfeedComponent } from './User/userfeed/userfeed.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AboutUSComponent,
    CarbookComponent,
    AddashComponent,
    BookingComponent,
    CustomersComponent,
    DriverComponent,
    CarComponent,
    CarreviewComponent,
    DriverreviewComponent,
    FeedbackComponent,
    UserdashComponent,
    UserbookingComponent,
    UsercarreviewComponent,
    UserdriverrevComponent,
    UserfeedComponent,
    ContactusComponent,
    AdloginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
