import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ExpenseService } from '../../../services/expense.service';
import { IncomeService } from '../../../services/income.service';
import { ExpenseModel } from '../../../models/expense.model';
import { Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
    CurrencyPipe, CommonModule
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = '';
  expenses: any[] = [];
  incomes: any[] = [];
  totalIncome: number = 0;

  constructor(
    private authService: AuthService,
    private expenseService: ExpenseService,
    private incomeService: IncomeService
  ) { }

  ngOnInit(): void {
    this.username = this.authService.getUsername();
    this.loadExpenses();
    this.loadIncomes();
  }

  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe((data: any) => {
      this.expenses = data;
      this.calculateTotalIncome();
    });
  }

  loadIncomes(): void {
    this.incomeService.getIncomes().subscribe((data: any) => {
      this.incomes = data;
      this.calculateTotalIncome();
    });
  }

  calculateTotalIncome(): void {
    const totalExpenses = this.expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const totalIncomes = this.incomes.reduce((sum, inc) => sum + inc.amount, 0);
    this.totalIncome = totalIncomes - totalExpenses;
  }

  deleteExpense(id: string): void {
    this.expenseService.deleteExpense(id).subscribe(
      () => {
        this.loadExpenses(); // Reload expenses after deletion
      },
      error => {
        console.error('Expense deletion failed', error);
      }
    );
  }

  deleteIncome(id: string): void {
    this.incomeService.deleteIncome(id).subscribe(
      () => {
        this.loadIncomes(); // Reload incomes after deletion
      },
      error => {
        console.error('Income deletion failed', error);
      }
    );
  }
}