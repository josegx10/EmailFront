import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DataService } from '../data.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../model/user.model';
import { ModalUserComponent } from '../modal-user/modal-user.component';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, ModalUserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users : any = [];
  selectedUser= {
    id: 'id',
    name: "name",
    email: '',
    password: '',
    isApproved: 1
  };
  u: FormGroup
  num = 11
  constructor(private dataservice: DataService){
    this.u = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      idCompany: new FormControl(''),
      password: new FormControl(''),
      isApproved: new FormControl('')
    })
    this.num++
    this.u.controls['id'].setValue(this.num)
    this.u.controls['idCompany'].setValue(2)
    this.u.controls['isApproved'].setValue(2)
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataservice.getUser().subscribe(Response => {
      this.users = Response
    })
  }
  selectUser(user: any){
    this.selectedUser = user;
  }
  crearUsuario(){
    console.log(this.u)
    this.num++
    this.dataservice.postUser(new User(this.u.value.id, this.u.value.name, this.u.value.email, this.u.value.idCompany,this.u.value.password, 2)).subscribe(Response => console.log(Response))
  }
  isApproved(user: any){
    user.isApproved = 2
    this.dataservice.putUser(user, user.id).subscribe();
  }
  isRefused(user: any){
    user.isApproved = 0
    this.dataservice.putUser(user, user.id).subscribe();
  }
}
