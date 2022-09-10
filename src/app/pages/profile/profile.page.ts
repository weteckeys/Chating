import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
