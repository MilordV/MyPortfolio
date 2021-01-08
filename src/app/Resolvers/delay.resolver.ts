import { Observable, of } from 'rxjs';
import { Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { delay } from 'rxjs/operators';
@Injectable({providedIn:'root'})

export class DelayResolve implements Resolve<Observable<any>> {
  retard = 1500;
  constructor() {
  }

  resolve(): any {
    return of(`delay at ${this.retard}`).pipe(delay(this.retard));
  }
}