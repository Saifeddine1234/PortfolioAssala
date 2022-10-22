import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CountUpDirective } from './count-up.directive';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter'
import { CounterComponent } from './counter/counter.component'
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AdminAddProjetComponent } from './admin-add-projet/admin-add-projet.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AdminPrincipalComponent } from './admin-principal/admin-principal.component';
import { AdminShowComponent } from './admin-show/admin-show.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    CountUpDirective,
    CounterComponent,
    AdminAddProjetComponent,
    AdminPrincipalComponent,
    AdminShowComponent,
    AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule.forRoot() ,
    BrowserAnimationsModule ,
    HttpClientModule ,
    NgxAnimatedCounterModule,
    FormsModule,
    ReactiveFormsModule,
    AnimateOnScrollModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
