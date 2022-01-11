import { Component, OnInit } from '@angular/core';
import { CarserviceService } from 'src/app/carservice.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookings = [
    {
    "carName":  "Swift Dzire",
    "driverName": "Anchal Vijay",
    "price": "Rs.699",
    "location": "Kota To Pune",
    "from": "01-02-2020",
    "to": "06-02-2020",
    "id":1
  },
  {
    "carName":  "Nexon",
    "driverName": "Nikhil Rane",
    "price": "Rs.699",
    "location": "Kota To Pune",
    "from": "01-02-2020",
    "to": "06-02-2020",
    "id":2
  },
  {
    "carName":  "Nexon",
    "driverName": "Nikhil Rane",
    "price": "Rs.699",
    "location": "Kota To Pune",
    "from": "01-02-2020",
    "to": "06-02-2020",
    "id":2
  },
  {
    "carName":  "Nexon",
    "driverName": "Nikhil Rane",
    "price": "Rs.699",
    "location": "Kota To Pune",
    "from": "01-02-2020",
    "to": "06-02-2020",
    "id":2
  },
  {
    "carName":  "Nexon",
    "driverName": "Nikhil Rane",
    "price": "Rs.699",
    "location": "Kota To Pune",
    "from": "01-02-2020",
    "to": "06-02-2020",
    "id":2
  },
  {
    "carName":  "Nexon",
    "driverName": "Nikhil Rane",
    "price": "Rs.699",
    "location": "Kota To Pune",
    "from": "01-02-2020",
    "to": "06-02-2020",
    "id":2
  },
]

  constructor(private carserviceService:CarserviceService) { }

  ngOnInit(): void {
    this.getDashboardBooking('pending')
  }

  getDashboardBooking(status:any){
    this.carserviceService.getDashboardBookings(status).subscribe((resp:any)=>{
      console.log(resp);
      this.bookings=resp;
    })
  }

  confirmBooking(bookingId:any){
    this.carserviceService.confirmBooking(bookingId).subscribe((resp:any)=>{
      console.log(resp);
    })
  }

}
