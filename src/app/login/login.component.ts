import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../model/user.model';
import { DeclarationListEmitMode } from '@angular/compiler';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: FormGroup
  constructor(private router: Router, private dataService: DataService) {
    this.user = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  acceder(): void  {
    this.dataService.signIn(this.user.controls['email'].value, this.user.controls['password'].value).subscribe((user : any[]) => {
      if(user.length != 0){
        localStorage.setItem('userId',user[0].id)
        localStorage.setItem('userName', user[0].name)
        localStorage.setItem('userEmail', user[0].email)
        localStorage.setItem('userPassword',user[0].password)
        localStorage.setItem('userIsApproved', user[0].isApproved)
        localStorage.setItem('userIdCompany', user[0].idCompany)

        this.router.navigate(['/main']);
      }else {
        console.log('Usuario no encontrado')
      }
    })

      ///this.router.navigate(['/main']);


  }
}
