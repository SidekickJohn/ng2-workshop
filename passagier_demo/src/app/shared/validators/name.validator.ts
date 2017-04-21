import { AbstractControl } from '@angular/forms';

export class NameValidator {
    static validate(c: AbstractControl) {
        
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