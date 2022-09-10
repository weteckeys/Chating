import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

    users = [
        'assets/imgs/user1.jpg',
        'assets/imgs/user2.jpg',
        'assets/imgs/user3.jpg',
        'assets/imgs/user4.jpg',
        'assets/imgs/user5.jpg',
    ];
    groups = [
        {
            img : 'assets/imgs/1.jpg',
            name : 'Happy Yoga'
        },
        {
            img : 'assets/imgs/2.jpg',
            name : 'Green Home'
        },
        {
            img : 'assets/imgs/3.jpg',
            name : 'Fashion Trends'
        },
        {
            img : 'assets/imgs/4.jpg',
            name : 'Daily Fashion'
        },
        {
            img : 'assets/imgs/5.jpg',
            name : 'Education'
        },
    ];

    constructor(private route: Router) { }

    ngOnInit() {
    }

    goToFriendProfile() {
        this.route.navigate(['/friend-profile']);
    }

    goToGroups() {
        this.route.navigate(['/groups']);
    }

    goToAllFriends(val) {
        const navData: NavigationExtras = {
            queryParams : {
              id: JSON.stringify(val)
            }
        };
        this.route.navigate(['/all-friends'], navData);
    }

}
