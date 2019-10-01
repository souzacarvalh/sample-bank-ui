import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

const AUTH_KEY = '587CE98AB75E9A5227DE750A80FA3CB9F544E22FE9EF5E1914116702DD231D16';

@Injectable()
export class AuthGuard implements CanActivate
{

    constructor(private router: Router, private cookieService: CookieService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let authKey =  this.cookieService.get('dummy-auth');
        
        if(authKey == AUTH_KEY) {
            return true;
        }

        return false;
    }
}