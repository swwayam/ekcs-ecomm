import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-main',
  templateUrl: './cart-main.component.html',
  styleUrls: ['./cart-main.component.css'],
})
export class CartMainComponent {
  @Input() image!: string;
}
