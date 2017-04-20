import { PassengerService } from './passenger.service';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Passenger } from './../../entities/passengers';
import { Component, OnInit } from '@angular/core';
import { AbstractPassengerService } from "./abstract-passenger-service";

@Component({
  selector: 'passenger-search',
  templateUrl: './passenger-search.component.html', 
  providers: [{provide:AbstractPassengerService, useClass: PassengerService}] 
})
export class PassengerSearchComponent implements OnInit {
  
  title = 'Passenger Search!';
  passengers: Array<Passenger> = [];
  name: string;
  firstName: string;
  selectedPassenger: Passenger;

  basket: any = {};

constructor(private passengerService: AbstractPassengerService, private http: Http){}

  ngOnInit() { 
        console.debug('Komponente ist jetzt da!');
    }
 
  
  search(): Promise<Passenger[]> {

    return new Promise<Passenger[]>((resolve: Function, reject: Function) =>{
      this.passengerService
        .find(this.name, this.firstName)
          .subscribe(
            passengers => {
              this.passengers = passengers;
              resolve(passengers);
            },
            err => {
              console.error('Fehler oider!! Bissd deppert?', err);
              reject(err);
            }
          )
    });
    
   
  }

  select(p: Passenger): void {
    this.selectedPassenger = p;
  }

 addNewPassenger(passenger: Passenger): void {
   if(passenger.id != 0){
    passenger.id = 0;
   }
   this.savePassenger(passenger);
 }



  savePassenger(passenger: Passenger): void {
    let url ="http://www.angular.at/api/passenger";
    let headers= new Headers();
    headers.set('Accept', 'application/json');

    this
    .http
    .post(url, passenger, {headers})
    .map(resp => resp.json())
    .subscribe(
      success =>{
        console.log("Updated successfully: ", passenger, success);
        this.unsetSelectedPassenger();
      },      
      err => {
        console.error('Fehler oider!! Bissd deppert?', err);
      }
    )
  }

  unsetSelectedPassenger():void{
    this.selectedPassenger = null;
  }

  createNewPass():void{
    this.selectedPassenger = {
      id: 0,
      name: this.name,
      firstName: this.firstName,
      bonusMiles: 0,
      passengerStatus: ""
    }
  }
}
