import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { BankingComponent } from './banking/banking.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'login/:error-id', component: LoginComponent},

  {
    path: '',
    component: LayoutComponent, 
    canActivate: [AuthGuard], 
    children: [
      { path: 'banking', component: BankingComponent, canActivate: [AuthGuard] },
    ]
  },

  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }