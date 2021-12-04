import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarRoutingModule } from './toolbar-routing.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
