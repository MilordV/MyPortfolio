import { Observable, of } from 'rxjs';
import { Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { delay } from 'rxjs/operators';
@Injectable({providedIn:'root'})

export class DelayResolve implements Resolve<Observable<any>> {
<<<<<<< HEAD
  retard = 1500;
=======
  retard = 1000;
>>>>>>> d8e4a86ddc148534ef55674f1cc78cb64b950565
  constructor() {
  }

  resolve(): any {
    return of(`delay at ${this.retard}`).pipe(delay(this.retard));
  }
}