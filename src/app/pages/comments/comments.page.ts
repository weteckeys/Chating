import { ModalController, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

    comments = [
        {
            user : 'assets/imgs/user1.jpg',
            text : 'Love it !!!'
        },
        {
          user : 'assets/imgs/user2.jpg',
          text : 'Woo... so pretty!'
        },
        {
          user : 'assets/imgs/user3.jpg',
          text : 'Nice pic ever..'
        },
    ];
    screenHeight;

    constructor(private platform: Platform, private modalCtrl: ModalController) {
        console.log('==============' + platform.height());
        this.screenHeight = platform.height() - 150;
    }

    ngOnInit() {
    }

    close() {
        this.modalCtrl.dismiss();
    }

}
