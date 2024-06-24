import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {CommonModule, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CurrencyPipe,
    CommonModule
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    const user = { username: this.username, password: this.password };
    this.authService.register(user).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
