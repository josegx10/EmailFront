import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userId = ''
  userName = ''
  userPassword = ''
  userEmail = ''


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(localStorage.getItem('userId')){
      this.userId = `${localStorage.getItem('userId')}`
      this.userName = `${localStorage.getItem('userName')}`
      this.userPassword = `${localStorage.getItem('userPassword')}`
      this.userEmail = `${localStorage.getItem('userEmail')}`
    }
  }
}
