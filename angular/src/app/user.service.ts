import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../app/user';
import {Assistance} from '../app/assistance';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }

  add_user(user: User){
    console.log(user);
    return this.httpclient.post<any>('http://localhost:3001/users/add_user', user);
  }

  add_assistance(assistance: Assistance){
    console.log(assistance);
    return this.httpclient.post<any>('http://localhost:3001/users/add_assistance', assistance);
  }

  getUser(){
    return this.httpclient.get<any>('http://localhost:3001/users/get_user');
  }
  
  getAssistance(){
    return this.httpclient.get<any>('http://localhost:3001/users/get_assistance');
  }
}
