import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DataService } from '../data.service';
import { ModalDomainComponent } from '../modal-domain/modal-domain.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Domain } from '../model/domain.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-domain-list',
  standalone: true,
  imports: [HeaderComponent, ModalDomainComponent, ReactiveFormsModule],
  templateUrl: './domain-list.component.html',
  styleUrl: './domain-list.component.css'
})
export class DomainListComponent {
  domains: any = []
  domain : FormGroup
  selectedDomain = {
    id: "",
    name: "",
    domain: "",
    email: "",
    approved: 1
  }
  constructor(private dataService: DataService){
    this.domain = new FormGroup({
      name: new FormControl(''),
      domain: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataService.getDomain().subscribe(Response => {
      this.domains = Response
    })
  }

  postDomain(){
    this.dataService.postDomain(new Domain(0,this.domain.value.name, `main@${this.domain.value.domain}.com`, this.domain.value.domain, 2)).subscribe(
      Response => {
        this.dataService.postUser(
          new User(
            0,
            this.domain.value.name,
            `main@${this.domain.value.domain}.com`,
            Response.id,
            this.domain.value.password,
            2,
            true
          )).subscribe(
            user => {

              this.domain.reset()
              const modalElement = document.getElementById('addRequestModal');
              const modalInstance = (window as any).bootstrap.Modal.getInstance(modalElement);
              modalInstance?.hide();

            })
            this.dataService.getDomain().subscribe(Response => {
              this.domains = Response
            })
          }
    )
  }
  selectDomain(domain: any){
    this.selectedDomain = domain;
  }
  isApproved(domain: any){
    domain.approved = 2
    this.dataService.putDomain(domain, domain.id).subscribe();

    this.dataService.getUser().subscribe(Response => {

      let user: User  | any =  Response.find(user => user.idCompany === domain.id)
      user.isApproved = 2
      this.dataService.putUser(user, user.id).subscribe()
    });
  }
  isRefused(domain: any){
    domain.approved = 0
    this.dataService.putDomain(domain, domain.id).subscribe();

    this.dataService.getUser().subscribe(Response => {

      let user : User | any =  Response.find(user => user.idCompany === domain.id)
      user.isApproved = 2
      this.dataService.putUser(user, user.id).subscribe()
    });
  }
}
