import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { BankingComponent } from './banking/banking.component';
import { AuthModule } from './auth/auth.module';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth/auth.guard';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    BankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
  ],
  providers: [
    CookieService,
    AuthGuard,
    { provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
