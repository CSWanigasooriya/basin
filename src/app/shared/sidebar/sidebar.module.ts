import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { SidebarRoutingModule } from './sidebar-routing.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, SidebarRoutingModule, MatIconModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
