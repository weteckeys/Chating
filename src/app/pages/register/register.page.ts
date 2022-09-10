import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    constructor(private navCrtl: NavController, private route: Router) { }

    ngOnInit() {
    }

    goToBack () {
        this.navCrtl.back();
    }

    goToLogin() {
        this.route.navigate(['/login']);
    }

    goToVerify() {
        this.route.navigate(['/verify']);
    }

}
