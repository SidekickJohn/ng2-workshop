import { PassengerEditGuard } from './../passenger-edit/passenger-edit-guard';
import { PassengerEditComponent } from './../passenger-edit/passenger-edit.component';
import { PassengerLookaheadComponent } from './../passenger-lookahead/passenger-lookahead.component';
import { ReactivePassengerSearchComponent } from './../reactive-passengersearch/reactive-passenger-search.component';
import { PassengerSearchComponent } from './passenger-search.component';
import { Routes, RouterModule } from '@angular/router';

const PASSENGER_SEARCH_ROUTES: Routes = [
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },
    {
        path: 'reactive-passenger-search',
        component: ReactivePassengerSearchComponent
    },
    {
        path: 'passenger-lookahead',
        component: PassengerLookaheadComponent
    },
    {
        path: 'passenger-edit/:id',
        component: PassengerEditComponent,
        canDeactivate: [PassengerEditGuard]
    }

];

export const PassengerSearchRouterModule = RouterModule.forChild(PASSENGER_SEARCH_ROUTES);