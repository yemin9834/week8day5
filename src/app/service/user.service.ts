import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = 'https://jsonplaceholder.typicode.com/users';

  test : string = 'test';


  private users: any[] = [];
  private usersSubject = new BehaviorSubject<any[]>(this.users);

  constructor(private http: HttpClient) {
    this.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  getUsers() {
    return this.http.get<any[]>(this.url);
  }

  addUser(name: string) {
    const newUser = { name };
    this.users.push(newUser);
    this.usersSubject.next(this.users);
  }

  getAllUsers() {
    return this.usersSubject.asObservable();
  }

  changeTest(){
    this.test = 'changed';
  }

}
