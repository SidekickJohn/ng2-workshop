import { PassengerService } from './passengersearch/passenger.service';
import { PassengerSearchComponent } from './passengersearch/passenger-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, PassengerSearchComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PassengerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
