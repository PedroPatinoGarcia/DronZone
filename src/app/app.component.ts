import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './components/user.service';

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit{
  public users$!:Observable<any>;
  constructor(private usersServices: UserService) {}

  ngOnInit(){
    this.users$ = this.usersServices.getUsers();
  }
}
