import { Component } from '@angular/core';
import { AuthService } from '../../../../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    const user = { username: this.username, password: this.password };
    this.authService.login(user).subscribe(
      () => {
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
