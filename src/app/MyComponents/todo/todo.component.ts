import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fade } from '../../Animations/fade';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(20px)' }),      //style({ backgroundColor: 'red', opacity: 0 })
        animate(2000),              //style({ backgroundColor: 'white', opacity: 1 })
      ]),
      transition('* => void', [
        animate(750, style({ opacity: 0, transform: 'translateX(-10px)' }))
      ])
    ]),
    //fade              //reuseable component
  ],
})
export class TodoComponent {
  items: any = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car wash',
  ];

  removeItem(item: any) {
    const index = this.items.indexOf(item);

    this.items.splice(index, 1);
  }
  addItem(itemInput: HTMLInputElement) {
    console.log(itemInput.value);
    this.items.push(itemInput.value);
  }
}
