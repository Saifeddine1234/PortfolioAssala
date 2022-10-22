import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Projet } from './projet';
import { Router } from '@angular/router';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private httpclient:HttpClient , private router: Router , private injector : Injector) {  
      }
  add_projet(projet: Projet){
    console.log(projet);
    return this.httpclient.post<any>('http://localhost:3001/projets/add_projet', projet);
  }
  getProjet(){
    return this.httpclient.get<any>('http://localhost:3001/projets/get_projet');
  }
  delete_projet(id : any){
    console.log(id);
    return this.httpclient.delete<any>('http://localhost:3001/projets/delete/' +id);
  }
  delete_contact(id : any){
    console.log(id);
    return this.httpclient.delete<any>('http://localhost:3001/projets/delete_contact/' +id);
  }

  add_contact(contact: Contact){
    console.log(contact);
    return this.httpclient.post<any>('http://localhost:3001/projets/add_contact', contact);
  }
  getContact(){
    return this.httpclient.get<any>('http://localhost:3001/projets/get_contact');
  }
  login(login : any){
    return this.httpclient.post<any>('http://localhost:3001/projets/login', login);
  }
  goto(token : any){
    console.log(token)
    const headers = new HttpHeaders(
      {
        'Content-type' : 'application/json',
        'Authorization' :  `${token}`
      } )
      console.log(headers)
    return this.httpclient.get<any>('http://localhost:3001/projets/adminP', {headers : headers });
  }
}
