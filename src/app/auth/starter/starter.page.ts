import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.page.html',
  styleUrls: ['./starter.page.scss']
})
export class StarterPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  login() {
    this.navCtrl.navigateForward('/login');
  }
  signup() {
    this.navCtrl.navigateForward('/register');
  }
  home() {
    this.navCtrl.navigateForward('/home');
  }
}
