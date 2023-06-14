import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: any[] = [];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getLogin();
  }

  getLogin() {
  this.http.get<any[]>('http://localhost:8080/api/login').subscribe(login => {
    this.login = login.map(login => {
      return login;
    });
      });
  }
}