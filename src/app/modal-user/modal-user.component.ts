import { Component, input } from '@angular/core';

@Component({
  selector: 'app-modal-user',
  standalone: true,
  imports: [],
  templateUrl: './modal-user.component.html',
  styleUrl: './modal-user.component.css'
})
export class ModalUserComponent {
  id = input<string>();
  name  = input<string>();
  email = input<string>();
  password = input<string>();
}
