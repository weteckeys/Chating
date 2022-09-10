import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private navCrtl: NavController, private route: Router) { }

    ngOnInit() {
    }

    goToBack () {
        this.navCrtl.back();
    }

    goToRegister() {
        this.route.navigate(['/register']);
    }

    goToTabs() {
        this.route.navigate(['tabs']);
    }

    goToForgot() {
        this.route.navigate(['/forgot']);
    }

}
