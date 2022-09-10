import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.page.html',
  styleUrls: ['./friend-profile.page.scss'],
})
export class FriendProfilePage implements OnInit {

  posts = [
    'assets/imgs/1.jpg',
    'assets/imgs/2.jpg',
    'assets/imgs/3.jpg',
    'assets/imgs/6.jpg',
    'assets/imgs/5.jpg',
  ];
  constructor(private route: Router, private navCrtl: NavController) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCrtl.back();
  }

}
