import { Routes } from '@angular/router';
import { LoginComponent } from './components/dashboard/dashboard/login/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'expense-form', component: ExpenseFormComponent},
];
