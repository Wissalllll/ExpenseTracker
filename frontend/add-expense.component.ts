import { Component } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  expense = {
    category: '',
    amount: 0,
    date: ''
  };

  constructor(private expenseService: ExpenseService) {}

  onSubmit() {
    this.expenseService.addExpense(this.expense).subscribe(response => {
      alert('Dépense ajoutée avec succès!');
    });
  }
}
