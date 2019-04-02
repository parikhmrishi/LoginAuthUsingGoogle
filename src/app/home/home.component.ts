import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { IUserDetails } from '../model/IUserDetail'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  response: string;

  constructor(private authService: AuthService, private router: Router, private userInfo: DataService) { }

  ngOnInit() {

    if (localStorage.getItem("userId") == null) {
      this.router.navigate(['auth']);
    }
    this.userInfo.getUser().subscribe((data) => {
      this.response = JSON.stringify(data); 
      console.log(this.response);
    });
  }

  signOut() {
    this.authService.signOut().then(() => {
      localStorage.removeItem("userId");
      this.router.navigate(['auth']);
    });

  }

}
