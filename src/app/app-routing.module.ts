import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './shared/error/error.component';
import { NgModule } from '@angular/core';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { UserComponent } from './modules/user/user.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
    loadChildren: () =>
      import('./modules/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'error',
    component: ErrorComponent,
    loadChildren: () =>
      import('./shared/error/error.module').then((m) => m.ErrorModule),
  },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
