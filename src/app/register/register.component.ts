import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  dataUser: any = []
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    /*this.dataService.getUser().subscribe((Respuesta: User[]) => {
      this.dataUser = Respuesta.filter(user => user.id == 9)
    })*/
  }
}
