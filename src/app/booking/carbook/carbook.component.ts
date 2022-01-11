import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarserviceService } from 'src/app/carservice.service';



@Component({
  selector: 'app-carbook',
  templateUrl: './carbook.component.html',
  styleUrls: ['./carbook.component.css']
})
export class CarbookComponent implements OnInit {
  orders = [
    {
      "carName": "Wagnor",
      "carDetails": "Manual, Petrol, 5 Seat, 3280km driven",
      "carRating":"4.0",
      "price":"699/-",
      "img":"assets/wagnor.jpg",
      "id":2
    },
    {
      "carName": "i20",
      "carDetails": "Manual, Petrol, 5 Seat, 5644km driven",
      "carRating":"4.2",
      "price":"665/-",
      "img":"assets/i20.jpg",
      "id":3
    },
    {
      "carName": "Etios",
      "carDetails": "Automatic, Petrol, 5 Seat, 6845km driven",
      "carRating":"4.1",
      "price":"735/-",
      "img":"assets/etios.jpg",
      "id":4
    },
    {
      "carName": "Swift Dzire",
      "carDetails": "Manual, Petrol, 5 Seat, 4962km driven",
      "carRating":"4.5",
      "price":"709/-",
      "img":"assets/swiftd.jpg",
      "id":5
    },
    {
      "carName": "i20",
      "carDetails": "Manual, Petrol, 5 Seat, 5644km driven",
      "carRating":"4.2",
      "price":"665/-",
      "img":"assets/i20.jpg",
      "id":6
    },
    {
      "carName": "Scorpio",
      "carDetails": "Automatic, Diesel, 7 Seat, 9944km driven",
      "carRating":"4.3",
      "price":"1150/-",
      "img":"assets/Scorpio.jpg",
      "id":7
    },
    {
      "carName": "Innova",
      "carDetails": "Automatic, Petrol, 7 Seat, 8457km driven",
      "carRating":"4.2",
      "price":"1089/-",
      "img":"assets/innova.jpg",
      "id":8
    },
  ]

constructor(private router:Router, private carserviceservice:CarserviceService){}
//create function
  ngOnInit(): void {
    this.getCarbook()
  }
  // Get API data
  getCarbook(){
    this.carserviceservice.callgetapi('url').subscribe((resp)=>{
    console.log(resp)
    })
  }

  onBookSubmit(){
      this.router.navigate(['/userdash'])
    }
  

}