import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  credentials = { email: '', password: '' };

  authService = inject(AuthService);


  submit() {
    this.authService.login();
  }
   isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
