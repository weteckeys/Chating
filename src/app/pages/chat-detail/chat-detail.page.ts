import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {

    messages = [
      {
        side : 'left',
        msg : 'Hello'
      },
      {
        side : 'right',
        msg : 'Hii'
      },
      {
        side : 'left',
        msg : 'How are you?'
      },
      {
        side : 'right',
        msg : 'I am good, thanks'
      },
      {
        side : 'right',
        msg : 'What about you ?'
      },
      {
        side : 'left',
        msg : 'I am also good.'
      },
      {
        side : 'right',
        msg : 'Ohh, That is great.'
      },
      {
        side : 'left',
        msg : 'Yes'
      },
      {
        side : 'right',
        msg : 'Are you nearby ?'
      },
      {
        side : 'left',
        msg : 'I will be there in few mins'
      },
      {
        side : 'right',
        msg : 'Ok, I am waiting at vinmark Store'
      },
      {
        side : 'left',
        msg : 'Sorry I am stuck in traffic. Please give me a moment.'
      }
    ];

    constructor(private navCtrl: NavController) { }

    ngOnInit() {
    }

    goToBack() {
        this.navCtrl.back();
    }

}
