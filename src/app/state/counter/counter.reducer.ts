import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ++state),
  on(decrement, (state) => --state),
  on(reset, (state) => 0)
);

export function counterReducer(state: number | undefined, action: Action) {
  return _counterReducer(state, action);
}
