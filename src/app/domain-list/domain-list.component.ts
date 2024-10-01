import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DataService } from '../data.service';
import { ModalDomainComponent } from '../modal-domain/modal-domain.component';

@Component({
  selector: 'app-domain-list',
  standalone: true,
  imports: [HeaderComponent, ModalDomainComponent],
  templateUrl: './domain-list.component.html',
  styleUrl: './domain-list.component.css'
})
export class DomainListComponent {
  domains: any = []
  selectedDomain = {
    id: "",
    name: "",
    company: "",
    email: "",
    isApproved: 1
  }
  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataService.getDomain().subscribe(Response => {
      this.domains = Response
    })
  }
  selectDomain(domain: any){
    this.selectedDomain = domain;
  }
  isApproved(user: any){
    user.isApproved = 2
    this.dataService.putDomain(user, user.id).subscribe();
  }
  isRefused(user: any){
    user.isApproved = 0
    this.dataService.putDomain(user, user.id).subscribe();
  }
}
