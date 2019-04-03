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
  userInfo: IUserDetails;

  constructor(private authService: AuthService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    if (localStorage.getItem("userId") === null) {
      this.router.navigate(['auth']);
    }
    else {
      this.router.navigate(['home']);
    }

    this.userInfo = this.dataService.getData();
    console.log(this.userInfo.id + " " + this.userInfo.name + " " + this.userInfo.email);
  }

  signOut() {
    this.authService.signOut().then(() => {
      localStorage.removeItem("userId");
      this.router.navigate(['auth']);
    });

  }

}
