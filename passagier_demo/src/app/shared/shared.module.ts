import { PassengerValidationErrorsComponent } from './validators/passengervalidationerrors/passenger-validation-errors.component';
import { NameValidationDirective } from './validators/name-validation.directive';
import { StatusPipe } from './pipes/status.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common/";
import { StatusColorPipe } from "./pipes/statuscolor.pipe";




@NgModule({
    imports: [
        CommonModule
    ],    
    declarations: [
        StatusPipe,
        StatusColorPipe,
        NameValidationDirective,
        PassengerValidationErrorsComponent
    ],
    providers: [],
    exports: [
        StatusPipe,
        StatusColorPipe,
        NameValidationDirective,
        PassengerValidationErrorsComponent
    ]
})
export class SharedModule { }
