import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  constructor(private http: HttpClient) { }

  saveLoginForm(loginData:any){
    return this.http.post('url', loginData)
  }

  getDashboardBookings(status:any){
    return this.http.get('url?status='+status)
  }

  confirmBooking(bookingId:any){
    return this.http.post('url', {"id":bookingId})
  }
  callpostapi(url:string,data:any){
    return this.http.post(url, data)
  }
  callgetapi(url:string){
    return this.http.get(url)
  }
  userBooking(){
    return this.http.get('url')
  }
  listCustomer(){
    return this.http.get('url')
  }
  listDriver(){
    return this.http.get('url')
  }
  listCar(){
    return this.http.get('url')
  }
  drevCar(){
    return this.http.get('url')
  }
  feedCar(){
    return this.http.get('url')
  }
  revCar(){
    return this.http.get('url')
  }
  
}
