import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchCaseComponent } from "./MyComponents/switch-case/switch-case.component";
import { ForStatementComponent } from "./MyComponents/for-statement/for-statement.component";
import { IfStatementComponent } from "./MyComponents/if-statement/if-statement.component";
import { ContactFormComponent } from "./MyComponents/contact-form/contact-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwitchCaseComponent, ForStatementComponent, IfStatementComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practice'
}
