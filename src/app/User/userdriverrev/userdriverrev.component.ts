import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CarserviceService } from 'src/app/carservice.service';

@Component({
  selector: 'app-userdriverrev',
  templateUrl: './userdriverrev.component.html',
  styleUrls: ['./userdriverrev.component.css']
})
export class UserdriverrevComponent implements OnInit {
  dreviewForm = new FormGroup({
    name: new FormControl('', []),
    email: new FormControl('', []),
    subject: new FormControl('', []),
  });
  constructor(private carserviceservice:CarserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.dreviewForm.value)
    this.carserviceservice.callpostapi('url',this.dreviewForm.value).subscribe((resp)=>{
      console.log(resp)
    })
  }
  
}
