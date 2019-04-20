import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  logedIn() {
    this.navCtrl.navigateForward('/home');
  }

  simConfirmation() {}
}
