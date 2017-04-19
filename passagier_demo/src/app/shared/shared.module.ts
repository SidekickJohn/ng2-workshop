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
        StatusColorPipe
    ],
    providers: [],
    exports: [
        StatusPipe,
        StatusColorPipe
    ]
})
export class SharedModule { }
