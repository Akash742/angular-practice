import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  email = "ad@domain.com";
  
  log(v: NgModel) {
    console.log(v);
  }

  /*onKeyUp() {
    console.log(this.email);
  }*/

}
