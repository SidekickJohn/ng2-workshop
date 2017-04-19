import { CommonModule } from '@angular/common/';
import { PassengerService } from './passenger.service';
import { SharedModule } from './../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PassengerSearchComponent } from './passenger-search.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        SharedModule,
        CommonModule
    ],    
    declarations: [PassengerSearchComponent],
    providers: [PassengerService],
    exports: [PassengerSearchComponent],
})
export class PassengerSearchModule { }
