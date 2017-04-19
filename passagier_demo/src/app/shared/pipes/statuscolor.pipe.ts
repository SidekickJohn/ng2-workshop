import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'statusColor'
})

export class StatusColorPipe implements PipeTransform {
    transform(value: string): string {

    let color;
        switch(value){
            case 'A':
                color = 'cyan';                
                break;
            case 'B':
                color = 'orange';                
                break;
            case 'C':
                color = 'green';                
                break;
            default:
                color = 'magenta';                
                break;
        }

    return color;
        
    }
}