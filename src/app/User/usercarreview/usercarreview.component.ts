import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CarserviceService } from 'src/app/carservice.service';

@Component({
  selector: 'app-usercarreview',
  templateUrl: './usercarreview.component.html',
  styleUrls: ['./usercarreview.component.css']
})
export class UsercarreviewComponent implements OnInit {
  carfForm = new FormGroup({
    name: new FormControl('', []),
    email: new FormControl('', []),
    subject: new FormControl('', []),
  });
  constructor(private carserviceservice:CarserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.carfForm.value)
    this.carserviceservice.callpostapi('url',this.carfForm.value).subscribe((resp)=>{
      console.log(resp)
    })
  }
  
}
