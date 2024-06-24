import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CurrencyPipe,
    CommonModule
  ],
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent {
  expense: any = {
    description: '',
    amount: 0,
    date: ''
  };

  constructor(private expenseService: ExpenseService, private router: Router) { }

  addExpense() {
    this.expenseService.addExpense(this.expense).subscribe(
      () => {
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error('Expense addition failed', error);
      }
    );
  }
}
