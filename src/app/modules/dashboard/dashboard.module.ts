import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'src/app/shared/sidebar/sidebar.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
