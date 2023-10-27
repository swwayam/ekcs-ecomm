import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quantity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css'],
})
export class QuantityComponent {
  qunatity: number = 0;

  add(): void {
    this.qunatity += 1;
  }

  sub(): void {
    if (this.qunatity > 0) {
      this.qunatity -= 1;
    }
  }
}
