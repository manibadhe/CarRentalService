import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CarserviceService } from 'src/app/carservice.service';

@Component({
  selector: 'app-userfeed',
  templateUrl: './userfeed.component.html',
  styleUrls: ['./userfeed.component.css']
})
export class UserfeedComponent implements OnInit {
  feedForm = new FormGroup({
    name: new FormControl('', []),
    email: new FormControl('', []),
    subject: new FormControl('', []),
  });
  constructor(private carserviceservice:CarserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.feedForm.value)
    this.carserviceservice.callpostapi('url',this.feedForm.value).subscribe((resp)=>{
      console.log(resp)
    })
  }
  
}
