import { Component, Inject, OnInit } from '@angular/core';
import { AppConfig, APP_CONFIG } from 'src/app/core/app.config';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(@Inject(APP_CONFIG) public config: AppConfig) {}

  ngOnInit(): void {}
}
