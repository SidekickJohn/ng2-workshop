import { Router } from '@angular/router';
import { Passenger } from './../../entities/passengers';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'passenger-card',
    templateUrl: 'passenger-card.component.html'
})

export class PassengerCardComponent implements OnInit {
    @Input() item: Passenger;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();
    
    constructor(private router: Router) { }

    ngOnInit() { }

    select(){
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect(){
        this.selected = false;
        this.selectedChange.next(this.selected);
    }

    openPassenger(id: number) {
        this.router.navigate(['../passenger-edit', id, {showDetails: true}]);
    }
}