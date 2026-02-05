import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from './model/user.model';
import { Domain } from './model/domain.model';
import { sentEmail } from './model/userEmail';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data : any
  url = "http://192.168.1.73:9100"
  constructor(private http: HttpClient) {

  }
  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.url + "/user/readAll");
  }
  postUser(user: User): Observable<User>{
    return this.http.post<User>(this.url + "/user/create", user);
  }
  putUser(user: User, id: number){
    return this.http.put<User>(this.url + "/user/update/" + id, user)
  }

  getUserEmail():  Observable<sentEmail[]>{
    return this.http.get<sentEmail[]>(this.url + "/sent/readAll");
  }
  postUserEmail(sent: sentEmail): Observable<sentEmail>{
    return this.http.post<sentEmail>(this.url + "/sent/create", sent);
  }
  getDomain() : Observable<Domain[]> {
    return this.http.get<Domain[]>(this.url + "/company/readAll");
  }

  postDomain(domain: Domain): Observable<Domain> {
    return this.http.post<Domain>(this.url + "/company/create", domain);
  }
  putDomain(user: Domain, id: number){
    return this.http.put<Domain>(this.url + "/company/update/" + id, user)
  }
  getData(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get(this.url + "/domain").subscribe(response => {
      this.data = response
      console.log(this.data)
      console.log("esto esta funcionando")
    })
    console.log('esto esta funcionando')
  }
  signIn(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(this.url + "/user/readAll").pipe(
      map((users: User[]) => {
        const foundUser = users.find(user => user.email === email && user.password === password)

        return foundUser ? [foundUser] : []
      })
    )
  }
}
