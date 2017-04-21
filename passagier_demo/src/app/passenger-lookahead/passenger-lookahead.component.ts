import { Observable } from 'rxjs/Observable';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Passenger } from './../../entities/passengers';
import { Component, OnInit } from '@angular/core';

import {  FormControl } from "@angular/forms";
import 'rxjs';

@Component({
  selector: 'passenger-lookahead',
  templateUrl: './passenger-lookahead.component.html'  
})
export class PassengerLookaheadComponent implements OnInit{
  constructor(private http: Http){}

  control: FormControl;
  passengers$: Observable<Passenger[]>;
  loading: boolean = false;

  ngOnInit(){
    this.control = new FormControl();

    this.passengers$ = this
                          .control
                          .valueChanges
                          .debounceTime(300)
                          .do(v => this.loading = true)
                          .switchMap(name => this.load(name))
                          .do(v => this.loading = false);
  }

  load(name: string){
    let url ="http://www.angular.at/api/passenger";

    let search = new URLSearchParams();
    search.set('name', name);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
            .http
            .get(url, {search, headers})
            .map(resp => resp.json());
  }

}
