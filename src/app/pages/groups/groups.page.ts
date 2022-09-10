import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

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
      {
          img : 'assets/imgs/6.jpg',
          name : 'Happy Yoga'
      },
      {
          img : 'assets/imgs/7.jpg',
          name : 'Green Home'
      },
      {
          img : 'assets/imgs/8.jpg',
          name : 'Fashion Trends'
      },
      {
          img : 'assets/imgs/1.jpg',
          name : 'Daily Fashion'
      },
      {
          img : 'assets/imgs/2.jpg',
          name : 'Education'
      },
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToBack() {
      this.navCtrl.back();
  }

}
