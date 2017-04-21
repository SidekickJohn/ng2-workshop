import { PassengerEditComponent } from './passenger-edit.component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";


export class PassengerEditGuard implements CanDeactivate<PassengerEditComponent>{
    
    canDeactivate(
        component: PassengerEditComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot){
            return component.canDeactivate();
        }    
}