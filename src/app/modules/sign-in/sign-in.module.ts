import { CommonModule } from '@angular/common';
import { FooterModule } from './../../shared/footer/footer.module';
import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { ToolbarModule } from './../../shared/toolbar/toolbar.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule, ToolbarModule],
  exports: [SignInComponent],
})
export class SignInModule {}
