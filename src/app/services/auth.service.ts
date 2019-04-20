import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  sendConfirmation() {
    const url = `${environment.ringCapctaApi}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-url-encoded; charset=utf-8',
        app_key: 'gy9ykesi5a5ira7igamu',
        phone: '+233556408282',
        api_key: 'e89ef9fae570f1f60b5d1e141019c350bfc8f9c3',
        service: 'sms'
      })
    };

    return this.http.post(url, httpOptions);
  }
}
