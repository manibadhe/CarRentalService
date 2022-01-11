import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carreview',
  templateUrl: './carreview.component.html',
  styleUrls: ['./carreview.component.css']
})
export class CarreviewComponent implements OnInit {
  cars = [
  {
    "review":  "Swift Dzire is good car.",
  },
  {
    "review":  "Innova is more comfortable.",
  },
  {
    "review":  "i20 is good for go to a drive.",
  },
  {
    "review":  "Etios is best for tour and luggage store too.",
  },
  {
    "review":  "Scorpio feel's a luxury jorney.",
  },
]
  constructor() { }

  ngOnInit(): void {
  }
  deleteEntry(){}

}