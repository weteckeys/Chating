import { CommentsPage } from './../comments/comments.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

    users = [
        'assets/imgs/user1.jpg',
        'assets/imgs/user2.jpg',
        'assets/imgs/user3.jpg',
        'assets/imgs/user4.jpg',
        'assets/imgs/user5.jpg',
        'assets/imgs/user1.jpg',
        'assets/imgs/user2.jpg',
        'assets/imgs/user3.jpg',
        'assets/imgs/user4.jpg',
        'assets/imgs/user5.jpg',
    ];

    tags = ['#Food', '#Travel', '#Shopping', '#Architecture', '#Art', '#Decor', '#Style', '#Sports', '#Movies'];
    tagID;

    posts = [
        {
            user : 'assets/imgs/user1.jpg',
            img : 'assets/imgs/1.jpg',
        },
        {
            user : 'assets/imgs/user2.jpg',
            img : 'assets/imgs/2.jpg',
        },
        {
            user : 'assets/imgs/user3.jpg',
            img : 'assets/imgs/3.jpg',
        },
        {
            user : 'assets/imgs/user4.jpg',
            img : 'assets/imgs/4.jpg',
        },
        {
            user : 'assets/imgs/user5.jpg',
            img : 'assets/imgs/5.jpg',
        },
    ];

    constructor(private route: Router, private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    changeTag(val) {
        this.tagID = val;
    }

    goToCreatePost() {
        this.route.navigate(['/create-post']);
    }

    async openComment() {
        const modal = await this.modalCtrl.create({
            component: CommentsPage,
          });
          return await modal.present();
    }

}
