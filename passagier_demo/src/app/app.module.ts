import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './app.routes';
import { PassengerSearchModule } from './passengersearch/passenger-search.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent      
  ],
  imports: [
    BrowserModule,    
    HttpModule,
    PassengerSearchModule,
    AppRouterModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
