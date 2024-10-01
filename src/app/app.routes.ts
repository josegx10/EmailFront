import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginComponent } from './login/login.component';
import { EmailClientComponent } from './email-client/email-client.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { DomainRegisterComponent } from './domain-register/domain-register.component';
import { UserConfigComponent } from './user-config/user-config.component';
import { DomainListComponent } from './domain-list/domain-list.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  {path: '', component: IndexPageComponent},
  {path : 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'help', component: HelpComponent},
  {path: 'domainRegister', component: DomainRegisterComponent},
  {path: 'main', component: EmailClientComponent},
  {path: 'userConfig', component: UserConfigComponent},
  {path: 'domainList', component: DomainListComponent},
  {path: 'userList', component: UserListComponent}
];
