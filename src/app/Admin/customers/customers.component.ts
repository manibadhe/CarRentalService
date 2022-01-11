import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers = [
    {
    "Name":  "Sandip Sharma",
    "Email": "example@gmail.com",
    "Add": "Pune",
    "Contact": 1234567890
  },
  {
    "Name":  "Akash Trivedi",
    "Email": "example@gmail.com",
    "Add": "Pune",
    "Contact": 1234567890
  },
  {
    "Name":  "Harish Kakkar",
    "Email": "example@gmail.com",
    "Add": "Pune",
    "Contact": 1234567890
  },
  {
    "Name":  "Rohan Vijay",
    "Email": "example@gmail.com",
    "Add": "Pune",
    "Contact": 1234567890
  },
  {
    "Name":  "Jay Dupare",
    "Email": "example@gmail.com",
    "Add": "Pune",
    "Contact": 1234567890
  },
  {
    "Name":  "Akshay Kumar",
    "Email": "example@gmail.com",
    "Add": "Pune",
    "Contact": 1234567890
  },
]
  constructor() { }

  ngOnInit(): void {
  }
  deleteEntry(){}

}
