import { PassengerEditGuard } from './../passenger-edit/passenger-edit-guard';
import { PassengerEditComponent } from './../passenger-edit/passenger-edit.component';
import { PassengerSearchRouterModule } from './passenger-search.routes';
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
        CommonModule,
        PassengerSearchRouterModule
    ],    
    declarations: [
        PassengerSearchComponent, 
        PassengerCardComponent, 
        ReactivePassengerSearchComponent, 
        PassengerLookaheadComponent,
        PassengerEditComponent],
    providers: [PassengerService, PassengerEditGuard],
    exports: [
        PassengerSearchComponent, 
        ReactivePassengerSearchComponent, 
        PassengerLookaheadComponent,
        PassengerEditComponent],
})
export class PassengerSearchModule { }
