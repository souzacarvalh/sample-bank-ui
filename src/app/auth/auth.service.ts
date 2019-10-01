import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor(private cookieService: CookieService, private router: Router) {}

    login() {
        this.cookieService.set('dummy-auth', '587CE98AB75E9A5227DE750A80FA3CB9F544E22FE9EF5E1914116702DD231D16')
        this.router.navigateByUrl('banking');
    }

    logout() {
        this.cookieService.delete('dummy-auth');
        this.router.navigateByUrl('login');
    }
}