import { Component, input } from '@angular/core';

@Component({
  selector: 'app-email-content',
  standalone: true,
  imports: [],
  templateUrl: './email-content.component.html',
  styleUrl: './email-content.component.css'
})
export class EmailContentComponent {
  id = input<string>();
  idRender = input<string>();
  idRecipient = input<string>();
  Body = input<string>();
  Subject = input<string>();
}
