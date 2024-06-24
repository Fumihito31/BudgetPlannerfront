import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  private apiUrl = 'https://localhost:44330/api/incomes';

  constructor(private http: HttpClient) { }

  getIncomes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addIncome(income: any): Observable<any> {
    return this.http.post(this.apiUrl, income);
  }

  updateIncome(id: string, income: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, income);
  }

  deleteIncome(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
