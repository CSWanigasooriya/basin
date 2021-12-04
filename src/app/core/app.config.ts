import { InjectionToken } from '@angular/core';

export interface AppConfig {
  title: string;
  dark_theme: boolean;
  phone: string;
  location: string;
}

export const AppConfig: AppConfig = {
  title: 'BASIN',
  dark_theme: false,
  phone: '+94000000000',
  location: 'Access Tower II, 22nd Floor, 278 Union Pl, Colombo 02000',
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
