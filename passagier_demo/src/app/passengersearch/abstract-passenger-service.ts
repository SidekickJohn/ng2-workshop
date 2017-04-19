import { Passenger } from './../../entities/passengers';
import { Observable } from 'rxjs/Observable';

export abstract class AbstractPassengerService {
    abstract find(name: string, firstName: string): Observable<Passenger[]>;
}