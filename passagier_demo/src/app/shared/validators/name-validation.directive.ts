import { NameValidator } from './name.validator';
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from "@angular/forms";

@Directive({ 
    selector: 'input[nameVal]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: NameValidationDirective, multi: true}
    ] 
})
export class NameValidationDirective {
    constructor() { }

    validate(c: AbstractControl): any {
        return NameValidator.validate(c);
    }
}