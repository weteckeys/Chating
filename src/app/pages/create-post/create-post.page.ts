import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {

    screenHeight;
    constructor(private navCrtl: NavController, private platform: Platform) { 
        console.log('==============' + platform.height());
        this.screenHeight = platform.height() - 200;
    }

    ngOnInit() {
    }

    goToBack() {
        this.navCrtl.back();
    }

}
