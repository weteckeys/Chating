import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  users = [
      {
          img: 'assets/imgs/user1.jpg',
          detail : 'want to become your friend'
      },
      {
          img: 'assets/imgs/user2.jpg',
          detail : 'like your post today'
      },
      {
          img: 'assets/imgs/user3.jpg',
          detail : 'commented on your post'
      },
      {
          img: 'assets/imgs/user4.jpg',
          detail : 'react on your post'
      },
      {
          img: 'assets/imgs/user5.jpg',
          detail : 'want to become your friend'
      },
      {
          img: 'assets/imgs/user1.jpg',
          detail : 'like your post today'
      },
      {
          img: 'assets/imgs/user2.jpg',
          detail : 'commented on your post'
      },
      {
          img: 'assets/imgs/user3.jpg',
          detail : 'react on your post'
      },
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToBack() {
      this.navCtrl.back();
  }

}
