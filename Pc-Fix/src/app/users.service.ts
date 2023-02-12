import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  logedInUser : string = "";

  baseURL: string = 'http://localhost:8000/api/';
  headers = { 'content-type': 'application/json' };

  constructor(private http:HttpClient){}


  getUser(): Observable<any> {
    return this.http.get(this.baseURL + 'getUser');
  }

  addUser(user: User): Observable<any> {
    let body = JSON.stringify(user);
    console.log(body);
    return this.http.post(this.baseURL + 'createUser', body, {
    headers: this.headers
    });
  }

  setUserName(userName : string){
    this.logedInUser = userName;
  }

  getUserName(){
    return this.logedInUser;
  }
}

export class User {
  userName!: string;
  password!: string;
}