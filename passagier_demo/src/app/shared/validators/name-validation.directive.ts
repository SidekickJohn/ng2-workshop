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
        let allowed = "A-Z,a-z,öäüßÖÄÜ";
        var str = c.value;
        if(!str) return {};

        var ok = str.match(/^[a-zA-Z\-]*$/);

        if(!ok){
            return {
                nameVal: {
                    actual: c.value,
                    reason: 1,
                    possible: allowed
                }
            }
        }
        return {};
    }
}