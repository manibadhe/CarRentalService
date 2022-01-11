import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarserviceService } from 'src/app/carservice.service';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent implements OnInit {
  adloginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    password: new FormControl('', [Validators.required]),
  });
  username=''
  password=''
 

  constructor(private router:Router, private carserviceservice:CarserviceService) { }

  ngOnInit(): void {
  }

  onLoginSubmit(){
    if (this.adloginForm.controls['username'].hasError('pattern')){
      alert('Please enter valid email address')
    }else if (this.adloginForm.valid){

    console.log(this.username,this.password)
    this.carserviceservice.callpostapi('url',{'username':this.username, 'password':this.password}).subscribe((resp)=>{
    console.log(resp)
    })
    // console.log(this.adloginForm.value)
      
    this.router.navigate(['/booking'])
  // },error =>{
  //   console.log(error);  
  // })
  console.log(this.username,this.password)
    this.carserviceservice.callgetapi('url').subscribe((resp)=>{
    console.log(resp)
    })
    console.log(this.adloginForm.value)

  }else{
    alert('Please enter all fields')
  }
}
  

}