import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { Router } from '@angular/router'
import { DataService } from '../service/data.service';
import { IUserDetails } from '../model/IUserDetail'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private user: SocialUser;
  response: IUserDetails
  constructor(private authService: AuthService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("1") === null ) {
      this.authService.authState.subscribe((user) => {
        this.user = user;
      });
    } else {
      this.router.navigate(['home']);
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      //this.dataService.setData(this.user);
      localStorage.setItem("userId", this.user.id);
      this.router.navigate(['home']);
      this.dataService.setUser(this.user.id, this.user.name, this.user.email, "2" );
    });
  }
}

