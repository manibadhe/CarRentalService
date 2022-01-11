import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars = [
    {
    "Name":  "Swift Dzire",
  },
  {
    "Name":  "Innova",
  },
  {
    "Name":  "i20",
  },
  {
    "Name":  "Etios",
  },
  {
    "Name":  "Scorpio",
  },
  {
    "Name":  "Nexon",
  },
]
  constructor() { }

  ngOnInit(): void {
  }
  deleteEntry(){}

}
