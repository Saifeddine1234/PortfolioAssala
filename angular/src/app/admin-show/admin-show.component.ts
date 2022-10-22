import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from '../projet.service';

@Component({
  selector: 'app-admin-show',
  templateUrl: './admin-show.component.html',
  styleUrls: ['./admin-show.component.scss']
})

export class AdminShowComponent implements OnInit {
  messages : any ;
  constructor(private  projet : ProjetService ,private router : Router) { }

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


    this.projet.getContact().subscribe(
      result=>{
        console.log(result);
        this.messages = result;    
      }
    )
  } 
  ContactDelete(id : any){
    if(confirm("Are you sure to delete Contact ? ")) {
    this.projet.delete_contact(id).subscribe(data =>{
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);      }
  )
    }
  }

}
