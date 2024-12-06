import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {
  expenses: any[] = [];
  displayedColumns: string[] = ['category', 'amount', 'date'];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses() {
    this.expenseService.getExpenses().subscribe(data => {
      this.expenses = data;
    });
  }
}
