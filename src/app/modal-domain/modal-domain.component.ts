import { Component, input } from '@angular/core';

@Component({
  selector: 'app-modal-domain',
  standalone: true,
  imports: [],
  templateUrl: './modal-domain.component.html',
  styleUrl: './modal-domain.component.css'
})
export class ModalDomainComponent {
  id = input<string>();
  name  = input<string>();
  email = input<string>();
  company = input<string>();
}
