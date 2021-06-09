import { Component } from '@angular/core';
import { Cart } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Shop';
  cart = new Cart();
}
