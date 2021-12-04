import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { close } from './../../state/sidenav/sidenav.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  toggle$: Observable<boolean>;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private store: Store<{ toggle: boolean }>
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    this.toggle$ = this.store.select('toggle');
  }

  closeSideNav() {
    this.store.dispatch(close());
  }

  ngOnDestroy(): void {
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }
}
