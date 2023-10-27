import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css']
})
export class CardHeaderComponent {
  title : string = "This is my first book"
  ratings : number[] = [1,1,1,1,1]
  price : number = 342
}
