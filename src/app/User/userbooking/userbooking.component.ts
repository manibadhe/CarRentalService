import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userbooking',
  templateUrl: './userbooking.component.html',
  styleUrls: ['./userbooking.component.css']
})
export class UserbookingComponent implements OnInit {
  bookings = [
    {
    "carName":  "Swift Dzire",
    "driverName": "Anchal Vijay",
    "price": "Rs.699",
    "location": "Kota To Pune",
    "from": "01-02-2020",
    "to": "06-02-2020",
    "id":1,
    "status": "pending"
  },
  {
    "carName":  "Nexon",
    "driverName": "Nikhil Rane",
    "price": "Rs.699",
    "location": "Kota To Pune",
    "from": "01-02-2020",
    "to": "06-02-2020",
    "id":2,
    "status": "pending"
  },
  {
    "carName":  "Nexon",
    "driverName": "Nikhil Rane",
    "price": "Rs.699",
    "location": "Kota To Pune",
    "from": "01-02-2020",
    "to": "06-02-2020",
    "id":2,
    "status": "confirmed"
  },
  {
    "carName":  "Nexon",
    "driverName": "Nikhil Rane",
    "price": "Rs.699",
    "location": "Kota To Pune",
    "from": "01-02-2020",
    "to": "06-02-2020",
    "id":2,
    "status": "pending"
  },
  {
    "carName":  "Nexon",
    "driverName": "Nikhil Rane",
    "price": "Rs.699",
    "location": "Kota To Pune",
    "from": "01-02-2020",
    "to": "06-02-2020",
    "id":2,
    "status": "confirmed"
  },
  {
    "carName":  "Nexon",
    "driverName": "Nikhil Rane",
    "price": "Rs.699",
    "location": "Kota To Pune",
    "from": "01-02-2020",
    "to": "06-02-2020",
    "id":2,
    "status": "pending"
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
