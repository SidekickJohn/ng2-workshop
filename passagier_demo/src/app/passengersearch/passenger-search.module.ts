import { PassengerLookaheadComponent } from './../passenger-lookahead/passenger-lookahead.component';
import { ReactivePassengerSearchComponent } from './../reactive-passengersearch/reactive-passenger-search.component';
import { PassengerCardComponent } from './../passengercard/passenger-card.component';
import { CommonModule } from '@angular/common/';
import { PassengerService } from './passenger.service';
import { SharedModule } from './../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassengerSearchComponent } from './passenger-search.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        SharedModule,
        CommonModule
    ],    
    declarations: [PassengerSearchComponent, PassengerCardComponent, ReactivePassengerSearchComponent, PassengerLookaheadComponent],
    providers: [PassengerService],
    exports: [PassengerSearchComponent, ReactivePassengerSearchComponent, PassengerLookaheadComponent],
})
export class PassengerSearchModule { }
