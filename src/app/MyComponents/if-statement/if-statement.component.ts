import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if-statement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if-statement.component.html',
  styleUrl: './if-statement.component.css'
})
export class IfStatementComponent {
  courses = [1, 2];
}
