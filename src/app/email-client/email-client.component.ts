import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { EmailListComponent } from '../email-list/email-list.component';
import { DataService } from '../data.service';
import { EmailContentComponent } from '../email-content/email-content.component';

@Component({
  selector: 'app-email-client',
  standalone: true,
  imports: [HeaderComponent, EmailListComponent, EmailContentComponent],
  templateUrl: './email-client.component.html',
  styleUrl: './email-client.component.css'
})
export class EmailClientComponent {
  userId = ''
  userName = ''
  userPassword = ''
  userEmail = ''
  ArrayUsersEmail: any = []
  emailContent = {
    id: "",
    idRender: "",
    idRecipient: "",
    Body: "",
    Subject: ""
  }
  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(localStorage.getItem('userId')){
      this.userId = `${localStorage.getItem('userId')}`
      this.userName = `${localStorage.getItem('userName')}`
      this.userPassword = `${localStorage.getItem('userPassword')}`
      this.userEmail = `${localStorage.getItem('userEmail')}`
    }

    this.dataService.getUserEmail().subscribe(Response => {
      this.ArrayUsersEmail = Response
    })
  }

  changeEmailContent(email: any){
    this.emailContent = email

  }
}
