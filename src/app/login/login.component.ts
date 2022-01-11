import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarserviceService } from '../carservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    password: new FormControl('', [Validators.required]),
  });
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    password: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    add: new FormControl('', [Validators.required]),
  });
 

  constructor(private router:Router, private carserviceservice:CarserviceService) { }

  ngOnInit(): void {
  }

  onLoginSubmit(){
    if (this.loginForm.controls['username'].hasError('pattern')){
      alert('Please enter valid email address')
    }else if (this.loginForm.valid){
      //api call//
      this.carserviceservice.saveLoginForm(this.loginForm.value).subscribe((resp)=>{
          console.log(resp)
        })
        console.log(this.loginForm.value)
      //routing//
      this.router.navigate(['/carbook'])
    // },error =>{
    //   console.log(error);

    }else{
      alert('Please enter all fields')
    }
  }
  
  onSignupSubmit(){
    if (this.signupForm.controls['email'].hasError('pattern')){
      alert('Please enter valid email address')
    }else if (this.signupForm.valid){

      this.carserviceservice.saveLoginForm(this.loginForm.value).subscribe((resp)=>{
        console.log(resp)
      })
    console.log(this.signupForm.value, new Date())

    }else{
      alert('Please enter all fields')
    }
  }
  

}