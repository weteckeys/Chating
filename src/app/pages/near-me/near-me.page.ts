import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-near-me',
  templateUrl: './near-me.page.html',
  styleUrls: ['./near-me.page.scss'],
})
export class NearMePage implements OnInit {
  users: any[] = [];
  avatars: any[] = [];
  constructor(
  ) {
    this.users = [
      {
        title: 'Two Birds, One Phone',
        msg: '😉😉Lorem ipsum, or lipsum😉😉',
        unRead: '122',
        img: 'assets/images/1.jpeg',
        time: '3:22 PM'
      },
      {
        title: 'The Uncalled Four',
        msg: 'Lorem ipsum, or lipsum',
        unRead: '23',
        img: 'assets/images/2.jpeg',
        time: '2:12 PM'
      },
      {
        title: 'Through Thick and Thin',
        msg: '🤜 Lorem ipsum, or lipsum',
        unRead: '21',
        time: '5:11 AM'
      },
      {
        title: 'Birds of a Feather',
        msg: '🐸Lorem ipsum, or lipsum',
        unRead: '0',
        img: 'assets/images/4.jpeg',
        time: '4:11 AM'
      },
      {
        title: 'Great Mates',
        msg: 'Lorem ipsum, or lipsum',
        unRead: '0',
        img: 'assets/images/5.jpg',
        time: '6:12 PM'
      },
      {
        title: 'Wired',
        msg: '🚛Lorem ipsum, or lipsum🚛',
        unRead: '12',
        img: 'assets/images/6.png',
        time: '6:12 PM'
      },
      {
        title: 'Strong Signals',
        msg: 'Lorem ipsum, or lipsum',
        unRead: '11',
        img: 'assets/images/7.jpg',
        time: '6:12 PM'
      },
      {
        title: 'Across Borders',
        msg: 'Lorem ipsum, or lipsum',
        unRead: '0',
        img: 'assets/images/8.jpeg',
        time: '6:12 PM'
      },
      {
        title: 'No Nonsense',
        msg: 'Lorem ipsum, or lipsum',
        unRead: '11',
        img: 'assets/images/9.jpg',
        time: '6:12 PM'
      },
      {
        title: 'Public Square',
        msg: 'Lorem ipsum, or lipsum',
        unRead: '12',
        img: 'assets/images/10.jpg',
        time: '6:12 PM'
      },
      {
        title: 'Two Birds, One Phone',
        msg: '😉😉Lorem ipsum, or lipsum😉😉',
        unRead: '122',
        img: 'assets/images/1.jpeg',
        time: '3:22 PM'
      },
      {
        title: 'The Uncalled Four',
        msg: 'Lorem ipsum, or lipsum',
        unRead: '23',
        img: 'assets/images/2.jpeg',
        time: '2:12 PM'
      },
      {
        title: 'Through Thick and Thin',
        msg: '🤜 Lorem ipsum, or lipsum',
        unRead: '21',
        img: 'assets/images/3.jpg',
        time: '5:11 AM'
      },
      {
        title: 'Birds of a Feather',
        msg: '🐸Lorem ipsum, or lipsum',
        unRead: '0',
        img: 'assets/images/4.jpeg',
        time: '4:11 AM'
      },
      {
        title: 'Great Mates',
        msg: 'Lorem ipsum, or lipsum',
        unRead: '0',
        img: 'assets/images/5.jpg',
        time: '6:12 PM'
      },
      {
        title: 'Wired',
        msg: '🚛Lorem ipsum, or lipsum🚛',
        unRead: '12',
        img: 'assets/images/6.png',
        time: '6:12 PM'
      },
      {
        title: 'Strong Signals',
        msg: 'Lorem ipsum, or lipsum',
        unRead: '11',
        img: 'assets/images/7.jpg',
        time: '6:12 PM'
      },
      {
        title: 'Across Borders',
        msg: 'Lorem ipsum, or lipsum',
        unRead: '0',
        img: 'assets/images/8.jpeg',
        time: '6:12 PM'
      },
      {
        title: 'No Nonsense',
        msg: 'Lorem ipsum, or lipsum',
        unRead: '11',
        img: 'assets/images/9.jpg',
        time: '6:12 PM'
      },
      {
        title: 'Public Square',
        msg: 'Lorem ipsum, or lipsum',
        unRead: '12',
        img: 'assets/images/10.jpg',
        time: '6:12 PM'
      },
    ];
    this.avatars = [
      {
        img: 'assets/images/8.jpeg',
        name: 'Thanos'
      },
      {
        img: 'assets/images/6.png',
        name: 'Drax'
      },
    ];;
  }

  ngOnInit() {
  }
  goToInbox(item) {
    console.log(item);
  }
}
