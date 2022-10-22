import { Component, OnInit } from '@angular/core';
import{ProjetService} from '../../app/projet.service';
import { Projet } from '../../app/projet';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-add-projet',
  templateUrl: './admin-add-projet.component.html',
  styleUrls: ['./admin-add-projet.component.scss']
})
export class AdminAddProjetComponent implements OnInit {
  dataa :FormGroup;
  projets : any ;
  formControls : any ;
  constructor(private projet:ProjetService,  private router: Router,private fb: FormBuilder,
    ) {
      this.formControls = { 
        nomProjet: new FormControl('',[
          Validators.required,
        ]),
        imageProjet: new FormControl('',[
          Validators.required,
        ]),
        descriptionProjet: new FormControl('',[
          Validators.required,
        ]),
      }
  
      this.dataa = this.fb.group(this.formControls);
    }
    
    get nomProjet() { return this.dataa.get('nomProjet') }
    get imageProjet() { return this.dataa.get('imageProjet') }
    get descriptionProjet() { return this.dataa.get('descriptionProjet') }


    AddItem(){
      let scat = this.dataa.value;
      if(confirm("Are you sure to Add a project ? ")) {
          let newProjet = new Projet(scat.nomProjet , scat.imageProjet , scat.descriptionProjet);
          this.projet.add_projet(newProjet).subscribe(data =>{
            let currentUrl = this.router.url;
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate([currentUrl]);      
        }
      )
      }

    }
    ProjectDelete(id : any){
      if(confirm("Are you sure to delete project ? ")) {
      this.projet.delete_projet(id).subscribe(data =>{
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);      }
    )
      }
    }
  
    ngOnInit() {
      this.dataa = new FormGroup(
        {
          nomProjet: new FormControl('',[
            Validators.required,
          ]),
          imageProjet: new FormControl('',[
            Validators.required,
          ]),
          descriptionProjet: new FormControl('',[
            Validators.required,
          ])
        }
      )
      this.projet.getProjet().subscribe(
        result=>{
          console.log(result);
          this.projets = result;    
        }
      )


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

}
