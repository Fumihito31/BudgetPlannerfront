import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { AuthService } from './services/auth.service';
import { ExpenseService } from './services/expense.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  providers: [AuthService, ExpenseService]
})
export class AppComponent {
  title = 'BudgetPlanner';
}
