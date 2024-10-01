import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from './model/user.model';
import { UserEmail } from './model/userEmail';
import { Domain } from './model/domain.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data : any
  url = "http://192.168.1.69:9100"
  constructor(private http: HttpClient) {

  }
  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.url + "/user/readAll");
  }
  postUser(user: User): Observable<User>{
    return this.http.post<User>(this.url + "/user", user);
  }
  putUser(user: User, id: number){
    return this.http.put<User>(this.url + "/user/" + id, user)
  }

  getUserEmail():  Observable<UserEmail[]>{
    return this.http.get<UserEmail[]>(this.url + "/UserEmail");
  }

  getDomain() : Observable<Domain[]> {
    return this.http.get<Domain[]>(this.url + "/domain");
  }
  putDomain(user: Domain, id: number){
    return this.http.put<Domain>(this.url + "/domain/" + id, user)
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
