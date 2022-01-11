import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CarserviceService } from '../carservice.service';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  // input declare
  contactForm = new FormGroup({
    name: new FormControl('',[]),
    email: new FormControl('',[]),
    subject: new FormControl('',[]),
    message: new FormControl('',[]),
  });
  // input declare
  // mycontact=''

  constructor(private carserviceservice:CarserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    // call API by seperate input declaration
    // console.log(this.contactForm.value,this.mycontact)
    // this.carserviceservice.callpostapi('url',{'mycontact':this.mycontact}).subscribe((resp)=>{
    console.log(this.contactForm.value)
    this.carserviceservice.callpostapi('url',this.contactForm.value).subscribe((resp)=>{
      console.log(resp)
    // for error handling through API
    },error =>{
      console.log(error);
      
    })
  }

}
