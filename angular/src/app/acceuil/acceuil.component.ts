import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxAnimatedCounterParams } from '@bugsplat/ngx-animated-counter';
import { ProjetService } from '../projet.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../contact';
import * as AOS from "aos";
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})

export class AcceuilComponent implements OnInit {
  public params1: NgxAnimatedCounterParams = { start: 20, end: 354, interval: 10, increment: 2 };
  public params2: NgxAnimatedCounterParams = { start: 20, end: 210, interval: 10, increment: 2 };
  public params3: NgxAnimatedCounterParams = { start: 900, end: 1423, interval: 2, increment: 1 };
  public params4: NgxAnimatedCounterParams = { start: 200, end: 711, interval: 2, increment: 1 };

  dataa :FormGroup;
  projets  :  any =[];

  constructor(private projet : ProjetService , private route: ActivatedRoute  , private fb: FormBuilder,
    ) { 
      let formControls = {
        nomContact: new FormControl('',[
          Validators.required,
        ]),
        emailContact: new FormControl('',[
          Validators.required,
        ]),
        subjectContact: new FormControl('',[
          Validators.required,
        ]),
        messageContact: new FormControl('',[
          Validators.required,
        ]),
      }
      this.dataa = this.fb.group(formControls);
    }
    get nomContact() { return this.dataa.get('nomContact') }
    get emailContact() { return this.dataa.get('emailContact') }
    get subjectContact() { return this.dataa.get('subjectContact') }
    get messageContact() { return this.dataa.get('messageContact') }
    Addcontact(){
      if(confirm("Are you sure to send message ? ")) {
      let scat = this.dataa.value;
          let newContact = new Contact(scat.nomContact , scat.emailContact , scat.subjectContact, scat.messageContact);
          console.log(newContact);
          this.projet.add_contact(newContact).subscribe(data =>{
            console.log("ddddddd");

        }
      )
      }
    }
    nom : any ;
    image : any ;
    description : any ;
ngOnInit() {
 
  this.projet.getProjet().subscribe(
    result=>{
      result.sort(()=> Math.random() - 0.5)
      console.log(result);
      for( var i = 0; i<11; i++){
        var imageProjet = result[i].imageProjet.replace('C:\\fakepath\\','');
        this.projets[i] = { nomProjet : result[i].nomProjet,  image_Projet : imageProjet ,descriptionProjet : result[i].descriptionProjet }
    }
    }
  )
 // console.log(this.route.snapshot.params.user_id);

 AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
} 
modal(nomP : any,imageP : any , descriptionP : any){
  //   localStorage.removeItem( 'produits');
  localStorage.setItem('nom' ,nomP );
  localStorage.setItem('image' ,imageP );
  localStorage.setItem('description' ,descriptionP );

 this.nom = localStorage.getItem('nom');
 this.image = localStorage.getItem('image');
 this.description = localStorage.getItem('description');
 
   }
}
