import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  drivers = [
    {
    "Name":  "Akash Nagar",
  },
  {
    "Name":  "Pritesh Saini",
  },
  {
    "Name":  "Kalpesh Chaouhan",
  },
  {
    "Name":  "Vijay Dugar",
  },
  {
    "Name":  "Durgesh Ptil",
  },
  {
    "Name":  "Sujit Handa",
  },
]
  constructor() { }

  ngOnInit(): void {
  }
  deleteEntry(){}

}