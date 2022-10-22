import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetService } from '../projet.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})

export class AdminLoginComponent implements OnInit {
  formGroup : any;
  alert : any ;
   constructor( private projet : ProjetService , private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup(
      {
        username : new FormControl('',[Validators.required]),
        password : new FormControl('',[Validators.required])
      }
    )

  }
  loginProcess(){
    if(this.formGroup.valid){
      this.projet.login(this.formGroup.value).subscribe(res => {
      this.alert = res.data ;
        if(res && res['status'] === 'ok' && res['loginUser'] ) {

           console.log(res['status'])
           localStorage.setItem('username' , res['data'])
   this.router.navigate(['/admin'])
   
   
   } else {
         console.log('Not valid user')
         this.router.navigate(['/admin/login'])

   }
   } , (err) => {
         if(err) {
            console.log('Error is ' , err)
            this.router.navigate(['/admin/login'])

         }
   })
    }
  }

}
