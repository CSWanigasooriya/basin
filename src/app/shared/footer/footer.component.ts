import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  mode$: Observable<boolean>;
  constructor(private store: Store<{ mode: boolean }>) {
    this.mode$ = this.store.select('mode');
  }

  ngOnInit(): void {}
}
