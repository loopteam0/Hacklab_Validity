import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss']
})
export class ConfirmationPage implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.sendConfirmation().subscribe(res => {
      console.log(res);
    });
  }
}
