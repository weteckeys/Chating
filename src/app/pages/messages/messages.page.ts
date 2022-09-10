import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

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
    constructor(private route: Router) { }

    ngOnInit() {
    }

    goToChatDetail() {
        this.route.navigate(['/chat-detail']);
    }

}
