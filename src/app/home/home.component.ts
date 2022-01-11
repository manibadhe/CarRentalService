import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarserviceService } from 'src/app/carservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataForm = new FormGroup({
    locationfrom: new FormControl('', [Validators.required]),
    locationto: new FormControl('', [Validators.required]),
    pickdate: new FormControl('', [Validators.required]),
    returndate: new FormControl('', [Validators.required]),
    km: new FormControl('', [Validators.required]),
  });
  
  cars = [
    {
      "img": "assets/Scorpio.jpg",
      "txt": "Scorpio"
    },
    {
      "img": "assets/i20.jpg",
      "txt": "i20"
    },
    {
      "img": "assets/innova.jpg",
      "txt": "Innova"
    },
    {
      "img": "assets/etios.jpg",
      "txt": "Etios"
    },
    {
      "img": "assets/swiftd.jpg",
      "txt": "Swift Dzire"
    },
    {
      "img": "assets/wagnor.jpg",
      "txt": "Wagnor"
    }
  ]

  constructor(private router:Router, private carserviceservice:CarserviceService) { }

  ngOnInit(): void {
  }

  onSubmitSubmit(){
      if (this.dataForm.valid){
        console.log(this.dataForm.value)
      this.carserviceservice.callpostapi('url',this.dataForm.value).subscribe((resp)=>{
          console.log(resp)
        })
      //routing//
      this.router.navigate(['/login'])
    }else{
      alert('Please enter all fields')
    }
  }

}

