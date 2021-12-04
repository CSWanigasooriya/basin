import { Component, OnInit } from '@angular/core';
import {
  decrement,
  increment,
  reset,
} from 'src/app/state/counter/counter.actions';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  count$: Observable<number>;

  toggle$: Observable<boolean>;
  mode$: Observable<boolean>;
  constructor(
    private store: Store<{ count: number; mode: boolean; toggle: boolean }>
  ) {
    this.count$ = store.select('count');
    this.toggle$ = store.select('toggle');
    this.mode$ = store.select('mode');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
