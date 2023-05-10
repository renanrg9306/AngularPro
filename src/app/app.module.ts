import { NavbarComponent } from './loginpage/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoginDirective } from './loginpage/logindirectives/login.directive';
import { HistoryComponent } from './loginpage/history/history.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BibliotecaEmilyComponent } from './loginpage/biblioteca-emily/biblioteca-emily.component';
import { UseraccessComponent } from './loginpage/useraccess/useraccess.component';

const appRoutes: Routes =[
  { path: '', component: LoginpageComponent },
  { path: 'history', component: HistoryComponent},
  { path: 'biblioteca-emily', component: BibliotecaEmilyComponent},
  { path: 'usersaccess', component: UseraccessComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    NavbarComponent,
    LoginDirective,
    HistoryComponent,
    BibliotecaEmilyComponent,
    UseraccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
