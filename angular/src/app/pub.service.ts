import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pub} from '../app/pub';

@Injectable({
  providedIn: 'root'
})
export class PubService {

  constructor(private httpclient:HttpClient) { }

  add_pubhaut(pubhaut: Pub){
    console.log(pubhaut);
    return this.httpclient.post<any>('http://localhost:3001/pubs/add_pubhaut', pubhaut);
  }
  
  add_pubprincipal(pubhaut: Pub){
    console.log(pubhaut);
    return this.httpclient.post<any>('http://localhost:3001/pubs/add_pubprincipal', pubhaut);
  }
  
  add_pubdroit(pubhaut: Pub){
    console.log(pubhaut);
    return this.httpclient.post<any>('http://localhost:3001/pubs/add_pubdroit', pubhaut);
  }
  
  add_pubmilieur(pubhaut: Pub){
    console.log(pubhaut);
    return this.httpclient.post<any>('http://localhost:3001/pubs/add_pubmilieu', pubhaut);
  }
  
  add_pubbas(pubhaut: Pub){
    console.log(pubhaut);
    return this.httpclient.post<any>('http://localhost:3001/pubs/add_pubbas', pubhaut);
  }

  getpub(){
    return this.httpclient.get<any>('http://localhost:3001/pubs/get_pub');
  }
  
}
