import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { EmailListComponent } from '../email-list/email-list.component';
import { DataService } from '../data.service';
import { EmailContentComponent } from '../email-content/email-content.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { sentEmail } from '../model/userEmail';

@Component({
  selector: 'app-email-client',
  standalone: true,
  imports: [HeaderComponent, EmailListComponent, EmailContentComponent, ReactiveFormsModule],
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
    body: "",
    subject: ""
  }

  sent: FormGroup
  constructor(private dataService: DataService) {
    this.sent = new FormGroup({
      idRender: new FormControl(''),
      idRecipient: new FormControl(''),
      Body: new FormControl(''),
      Subject : new FormControl(''),
      DateSent: new FormControl('')
    })


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

  send(){
    this.sent.controls['DateSent'].setValue(new Date().toISOString())
    this.sent.controls['idRender'].setValue(this.userId)
    this.dataService.getUser().subscribe(Response => {
      var idRecipient = Response.find(user => user.email === this.sent.value.idRecipient )
      if(idRecipient){
        this.dataService.postUserEmail(new sentEmail(0, this.sent.value.idRender, idRecipient?.id, this.sent.value.Body, this.sent.value.Subject, this.sent.value.DateSent)).subscribe(sent => {
          this.dataService.getUserEmail().subscribe(Response => {
            this.ArrayUsersEmail = Response
          })
        })
        this.sent.reset()


        const modalElement = document.getElementById('composeModal');
        const modalInstance = (window as any).bootstrap.Modal.getInstance(modalElement);
        modalInstance?.hide();


      }

    })
    //this.dataService.postUserEmail(new sentEmail(0, this.sent.value.idRender, this.sent.value.idRecipient, this.sent.value.Body, this.sent.value.Subject, this.sent.value.DateSent))
  }
  changeEmailContent(email: any){
    this.emailContent = email

  }
}
