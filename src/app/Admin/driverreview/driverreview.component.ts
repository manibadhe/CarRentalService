import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driverreview',
  templateUrl: './driverreview.component.html',
  styleUrls: ['./driverreview.component.css']
})
export class DriverreviewComponent implements OnInit {
  drivers = [
    {
      "review":  "Dinesh has not behaviour.",
    },
    {
      "review":  "Lalit is pleasant driver.",
    },
    {
      "review":  "Harish was not a good driver.",
    },
    {
      "review":  "Kaushik is polite driver.",
    },
    {
      "review":  "Sandip isa good driver.",
    },
  ]
    constructor() { }
  
    ngOnInit(): void {
    }
    deleteEntry(){}
  
  }