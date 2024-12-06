import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListExpensesComponent } from './features/expenses/list-expenses/list-expenses.component';
import { AddExpenseComponent } from './features/expenses/add-expense/add-expense.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'expenses', pathMatch: 'full' },
  { path: 'expenses', component: ListExpensesComponent },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
