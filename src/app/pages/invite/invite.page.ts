import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss'],
})
export class InvitePage implements OnInit {

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
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToBack() {
      this.navCtrl.back();
  }

}
