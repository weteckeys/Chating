import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.page.html',
  styleUrls: ['./all-friends.page.scss'],
})
export class AllFriendsPage implements OnInit {

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
    value;

    constructor(private route: ActivatedRoute, private navCtrl: NavController) {
        this.route.queryParams.subscribe(data => {
            console.log(JSON.parse(data.id));
            this.value = JSON.parse(data.id);
        });
    }

    ngOnInit() {
    }

    goToBack() {
        this.navCtrl.back();
    }

}
