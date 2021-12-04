import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../core/material.module';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarRoutingModule } from './toolbar-routing.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, ToolbarRoutingModule, MaterialModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
