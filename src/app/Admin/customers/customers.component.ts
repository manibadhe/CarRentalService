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
  },
  {
    "Name":  "Akash Trivedi",
  },
  {
    "Name":  "Harish Kakkar",
  },
  {
    "Name":  "Rohan Vijay",
  },
  {
    "Name":  "Jay Dupare",
  },
  {
    "Name":  "Akshay Kumar",
  },
]
  constructor() { }

  ngOnInit(): void {
  }
  deleteEntry(){}

}
