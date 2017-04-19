import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'statusPipe',
    pure: true
})

export class StatusPipe implements PipeTransform {
    transform(value: any, fmt: string): any {
        
        let long, short;

        switch(value){
            case 'A':
                short = 'SEN';
                long = 'Senator';
                break;
            case 'B':
                short = 'FTL';
                long = 'Frequent Traveler';
                break;
            case 'C':
                short = '-';
                long = 'Passenger';
                break;
            default:
                short = 'NoStat';
                long = 'No Status';
                break;
        }

        if(fmt=='long') return long;
        return short;

    }
}