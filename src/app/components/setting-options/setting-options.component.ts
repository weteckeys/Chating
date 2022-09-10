import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-setting-options',
  templateUrl: './setting-options.component.html',
  styleUrls: ['./setting-options.component.scss'],
})
export class SettingOptionsComponent implements OnInit {

  constructor(
    private popoverController: PopoverController,
    private navCtrl: NavController
  ) { }

  ngOnInit() { }
  close() {
    this.popoverController.dismiss();
  }
  logout() {
    this.close();
    this.navCtrl.navigateRoot(['sliders']);
  }
}
