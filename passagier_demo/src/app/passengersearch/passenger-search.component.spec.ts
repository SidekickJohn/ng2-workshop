import { PassengerSearchModule } from './passenger-search.module';
import { Observable } from 'rxjs';
import { PassengerSearchComponent } from './passenger-search.component';
import { TestBed, async } from '@angular/core/testing';
import { Passenger } from "./../../entities/passengers";
import { AbstractPassengerService } from "./abstract-passenger-service";


import 'rxjs/add/operator/map';

let dummyPassengerService = {
    find(name: string, firstName: string): Observable<Passenger[]> {
        console.debug('dummyPassengerService wird aufgerufen');
        return Observable.of([{id: 12, name: 'pansen', firstName: 'hansen', bonusMiles: 2, passengerStatus: "A"}]);
    }
}

describe('PassengerSearchComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[
            PassengerSearchModule
        ],  
        declarations: [
          
        ],
    }).compileComponents();

    TestBed.overrideComponent(PassengerSearchComponent, {
        set: {
            providers: [
                { provide: AbstractPassengerService, useValue: dummyPassengerService}
            ]
        }
    }).compileComponents();


  }));

  it('should not have a selectedPassenger initially', async(() => {
    const fixture = TestBed.createComponent(PassengerSearchComponent);
    const comp = fixture.componentInstance;
    expect(comp.selectedPassenger).toBeUndefined();
  }));

  it('should not load flights without name and firstName', (done: Function) => {
    const fixture = TestBed.createComponent(PassengerSearchComponent);
    const comp = fixture.componentInstance;

    comp.name = '';
    comp.firstName = '';

    let ok: boolean = true;

    comp.search()                   //try
    .then((passengers) => {
        ok = true;
    })
    .catch((err) => {               //catch
        ok = false;
        console.error('Gewünschter Fehler Hermano', err);
    })
    .then(() => {                   //finally
        expect(ok).toBeFalsy();
        done();
    });
  });

  
});
