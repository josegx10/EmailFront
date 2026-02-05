import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../model/user.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  dataUser: any = []
  user: FormGroup
  constructor(private dataService: DataService, private router: Router) {
    this.user = new FormGroup({
      name : new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    /*this.dataService.getUser().subscribe((Respuesta: User[]) => {
      this.dataUser = Respuesta.filter(user => user.id == 9)
    })*/

  }

  register() {
    this.dataService.getDomain().subscribe(Response => {
      let dom: string = this.user.value.email
      let d = dom.split('@')[1].split('.')[0]
      const domain =  Response.find(user => user.domain === d)
      if(this.user.value.password != this.user.value.confirmPassword){
        alert('la contraseña y la confirmación no coincide')
        return ;
      }
      if(domain != null){
        this.dataService.postUser(new User(0, this.user.value.name, this.user.value.email, domain.id, this.user.value.password, 1, false)).subscribe( Response => {
          localStorage.setItem('userId',Response.id.toString())
          localStorage.setItem('userName', Response.name)
          localStorage.setItem('userEmail', Response.email)
          localStorage.setItem('userPassword',Response.password)
          localStorage.setItem('userIsApproved', Response.isApproved.toString())
          localStorage.setItem('userIdCompany', Response.idCompany.toString())
          localStorage.setItem('userIsMain',`${Response.isMain}`)
        })

        this.router.navigate(['/login']);

      }else {
        alert('Dominio no encontrado')
      }

    })
  }
}
