import { mode } from './../../state/mode/mode.actions';
import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppConfig, APP_CONFIG } from 'src/app/core/app.config';
import { toggle } from './../../state/sidenav/sidenav.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  toggle$: Observable<boolean>;
  mode$: Observable<boolean>;
  count$: Observable<number>;

  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private store: Store<{ toggle: boolean; count: number; mode: boolean }>
  ) {
    this.toggle$ = this.store.select('toggle');
    this.mode$ = this.store.select('mode');
    this.count$ = this.store.select('count');
  }

  toggleSideNav() {
    this.store.dispatch(toggle());
  }

  toggleMode() {
    this.store.dispatch(mode());
  }
}
