import { Component, OnInit } from '@angular/core';
import { CarserviceService } from 'src/app/carservice.service';

@Component({
  selector: 'app-addash',
  templateUrl: './addash.component.html',
  styleUrls: ['./addash.component.css']
})
export class AddashComponent implements OnInit {

  constructor(private carserviceservice:CarserviceService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.carserviceservice.listCustomer()
      .subscribe((resp)=>{
        console.log(resp)
      })
  }
  onSubmit(){
    this.carserviceservice.listDriver()
      .subscribe((resp)=>{
        console.log(resp)
      })
  }
  onCcar(){
    this.carserviceservice.listCar()
      .subscribe((resp)=>{
        console.log(resp)
      })
  }
  onCardr(){
    this.carserviceservice.drevCar()
      .subscribe((resp)=>{
        console.log(resp)
      })
  }
  onCarfeed(){
    this.carserviceservice.feedCar()
      .subscribe((resp)=>{
        console.log(resp)
      })
  }
  onCarr(){
    this.carserviceservice.revCar()
      .subscribe((resp)=>{
        console.log(resp)
      })
  }

}