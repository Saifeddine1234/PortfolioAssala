import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from '../projet.service';

@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.component.html',
  styleUrls: ['./admin-principal.component.scss']
})
export class AdminPrincipalComponent implements OnInit {

  constructor(private projet : ProjetService , private router : Router) { }

  ngOnInit(): void {
    
    console.log(localStorage.getItem('username'))
    if(localStorage.getItem('username')){
      this.projet.goto(localStorage.getItem('username')).subscribe(res => {
        console.log(res)
        if(res && res['status'] === "ok" ){
          console.log("in admin")
        }else{
          console.log("err")
          this.router.navigate(['/admin/login'])
          localStorage.removeItem('username')

        }
      }, (err) => {
        if(err){
          this.router.navigate(['/admin/login'])
          localStorage.removeItem('username')

        }

      })

    }else{
      this.router.navigate(['/admin/login'])
      localStorage.removeItem('username')

    }


}
Logout(){
  localStorage.removeItem('username')
  this.router.navigate(['/admin/login'])

}
}