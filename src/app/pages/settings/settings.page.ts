import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    constructor(private route: Router) { }

    ngOnInit() {
    }

    goToInvite() {
        this.route.navigate(['/invite']);
    }

    goToAccount() {
        this.route.navigate(['/account']);
    }

    goToPrivacy() {
        this.route.navigate(['/privacy']);
    }

    goToNotificaion() {
        this.route.navigate(['/notification']);
    }

    goToTerms() {
        this.route.navigate(['/terms']);
    }

    openLocation() {
        this.route.navigate(['location']);
    }

    logout() {
        this.route.navigate(['']);
    }

}
