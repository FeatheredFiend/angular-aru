import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({ selector: 'app-layout', templateUrl: 'layout.component.html' })
export class LayoutComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }



    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}