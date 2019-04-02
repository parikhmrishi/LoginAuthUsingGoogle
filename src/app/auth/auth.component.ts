import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { Router } from '@angular/router'
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private user: SocialUser;
  response: any;
  constructor(private authService: AuthService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });

    if (!(localStorage.getItem("1") == null )) {
      this.router.navigate(['home']);
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      // this.dataService.setData(this.user);
      localStorage.setItem("1", this.user.id);
      this.router.navigate(['home']);
      this.dataService.setUser(this.user).subscribe((data) => 
      {
        this.response = data;
        console.log(this.response);
      });
    });
  }


}
