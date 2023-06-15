import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: any[] = [];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
  this.http.get<any[]>('http://localhost:8080/api/user').subscribe(user => {
    this.user = user.map(user => {
      return user;
    });
      });
  }
}