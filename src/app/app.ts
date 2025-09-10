import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { IconService } from './icon.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(iconService: IconService) {
    iconService.registerAll();
  }
}
