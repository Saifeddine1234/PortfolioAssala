import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'angular';
  constructor(private router: Router){
  
  }
  centre_asistance(){
    this.router.navigate(['/centre-assistance']);
  };
}
