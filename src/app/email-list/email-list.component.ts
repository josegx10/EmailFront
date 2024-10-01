import { Component, input } from '@angular/core';

@Component({
  selector: 'app-email-list',
  standalone: true,
  imports: [],
  templateUrl: './email-list.component.html',
  styleUrl: './email-list.component.css'
})
export class EmailListComponent {
  id = input<string>();
  idRender = input<string>();
  idRecipient = input<string>();
  Body = input<string>();
  Subject = input<string>();

}
