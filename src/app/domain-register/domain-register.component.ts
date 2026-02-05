import { Component, ɵisComponentDefPendingResolution } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Domain } from '../model/domain.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-domain-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './domain-register.component.html',
  styleUrl: './domain-register.component.css'
})
export class DomainRegisterComponent {
  domain: FormGroup

  constructor(private dataService: DataService, private fb: FormBuilder){
    this.domain = this.fb.group({
      name: ['', Validators.required],
      domain: ['', Validators.required],
      password: ['', Validators.required],
      info: new FormControl('')
    })
  }

  RegisterDomain(){
    if(this.domain.invalid){
      this.domain.markAllAsTouched();
      return
    }
    this.dataService.postDomain(
      new Domain(
        0,this.domain.value.name, `main@${this.domain.value.domain}.com`, this.domain.value.domain, 1))
        .subscribe(
          Response => {
            this.dataService.postUser(
              new User(
                0,
                this.domain.value.name,
                `main@${this.domain.value.domain}.com`,
                Response.id,
                this.domain.value.password,
                1,
                true
              )).subscribe(
                user => {
                  const d = this.domain.value.domain
                  this.domain.reset()
                  this.domain.controls['info'].setValue(
                    `
                    El correo generado para este dominio es de main@${d}.com
                    `
                  )

                })
          }
        )
  }
}
