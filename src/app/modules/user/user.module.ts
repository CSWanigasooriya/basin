import { CommonModule } from '@angular/common';
import { DashboardModule } from './../dashboard/dashboard.module';
import { MaterialModule } from './../../core/material.module';
import { NgModule } from '@angular/core';
import { ToolbarModule } from './../../shared/toolbar/toolbar.module';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    DashboardModule,
    ToolbarModule,
  ],
  exports: [UserComponent],
})
export class UserModule {}
