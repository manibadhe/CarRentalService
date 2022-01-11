import { Component, OnInit } from '@angular/core';
import { CarserviceService } from 'src/app/carservice.service';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {

  constructor(private carserviceservice:CarserviceService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.carserviceservice.userBooking()
      .subscribe((resp)=>{
        console.log(resp)
      })
  }

}
