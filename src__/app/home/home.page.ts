import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private AlertCtrl: AlertController) {}

  ngOnInit(): void {}

  async confirmAccess() {
    const alert = await this.AlertCtrl.create({
      header: 'Confirm your choice! ',
      message:
        'Grant <strong>Stambic Bank</strong> acccess to your private information!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
