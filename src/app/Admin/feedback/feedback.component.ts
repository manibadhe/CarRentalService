import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  books = [
    {
      "feedback":  "Swift Dzire is good car.",
    },
    {
      "feedback":  "Innova is more comfortable.",
    },
    {
      "feedback":  "i20 is good for go to a drive.",
    },
    {
      "feedback":  "Etios is best for tour and luggage store too.",
    },
    {
      "feedback":  "Scorpio feel's a luxury jorney.",
    },
  ]
    constructor() { }
  
    ngOnInit(): void {
    }
    deleteEntry(){}
  
  }