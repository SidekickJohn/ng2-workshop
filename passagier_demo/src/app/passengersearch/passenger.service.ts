import { Passenger } from './../../entities/passengers';
import { Http, Headers, URLSearchParams } from '@angular/http';


import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AbstractPassengerService } from "./abstract-passenger-service";

@Injectable()
export class PassengerService implements AbstractPassengerService{

    constructor(private http: Http){}

    find(name: string, firstName: string): Observable<Passenger[]> {
        
        let url ="http://www.angular.at/api/passenger";

        let headers= new Headers();
        headers.set('Accept', 'application/json');
        
        let search = { name, firstName};

        return this
            .http
            .get(url, {search, headers})
            .map(resp => resp.json());

        }
}