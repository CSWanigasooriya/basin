import { createReducer, on } from '@ngrx/store';
import { AppConfig } from 'src/app/core/app.config';

import { mode } from './mode.actions';

export const initialState = AppConfig.dark_theme;

const _modeReducer = createReducer(
  initialState,
  on(mode, (state) => !state),
);

export function modeReducer(state: any, action: any): any {
  return _modeReducer(state, action);
}