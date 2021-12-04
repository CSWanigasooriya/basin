import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mode$: Observable<boolean>;
  constructor(private store: Store<{ mode: boolean }>) {
    this.mode$ = this.store.select('mode');
  }
}
