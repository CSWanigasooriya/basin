import { close, open, toggle } from './sidenav.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState = false;

const _sidenavReducer = createReducer(
  initialState,
  on(toggle, (state) => !state),
  on(open, (state) => (state = true)),
  on(close, (state) => (state = false))
);

export function sidenavReducer(state: any, action: any): any {
  return _sidenavReducer(state, action);
}
