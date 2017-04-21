import { Observable, Observer } from 'rxjs';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Passenger } from './../../entities/passengers';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'passenger-edit',
    templateUrl: 'passenger-edit.component.html'
})

export class PassengerEditComponent implements OnInit {
    constructor(private route: ActivatedRoute, private http: Http, private router: Router) { }

    id: string;
    showDetails: string;
    selectedPassenger: Passenger;

    ngOnInit() {
        this.route.params.subscribe(p => {
            this.id = p['id'];
            this.showDetails = p['showDetails'];
            if(this.id != "0"){
                this.loadPassenger(this.id).subscribe(p => {
                this.selectedPassenger = p;  
                })
            }else{
                this.selectedPassenger = {
                    id:0,
                    name:"",
                    firstName:"",
                    bonusMiles:0,
                    passengerStatus:""
                };
            }

        })
     }

     loadPassenger(id: string): Observable<Passenger>{
        
        let url ="http://www.angular.at/api/passenger";

        let headers= new Headers();
        headers.set('Accept', 'application/json');
        
        let search = { id };

        return this
            .http
            .get(url, {search, headers})
            .map(resp => resp.json());
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
        },      
        err => {
            console.error('Fehler oider!! Bissd deppert?', err);
        });

        this.router.navigate(['../passenger-search']);
    }

// For Guards

    exitWarning = {
        observer: null,
        show: false
    }

    decide(d: boolean) {
        this.exitWarning.show =false;
        this.exitWarning.observer.next(d);
        this.exitWarning.observer.complete();
    }

    canDeactivate(){
        this.exitWarning.show = true;
        return new Observable<boolean>((sender: Observer<boolean>) => {
            this.exitWarning.observer = sender;
            
        });
    }
    
}