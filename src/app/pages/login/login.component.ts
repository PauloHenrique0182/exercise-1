import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  credentials = {email: '', password: ''};

   submit(){
   // if(this.credentials.email && this.credentials.password){

      //this.authService.login(this.credentials).subscribe();
    //}
      

  }

}
