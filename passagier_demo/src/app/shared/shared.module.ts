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
        NameValidationDirective
    ],
    providers: [],
    exports: [
        StatusPipe,
        StatusColorPipe,
        NameValidationDirective
    ]
})
export class SharedModule { }
