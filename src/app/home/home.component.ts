import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  response: any;

  constructor(private authService: AuthService, private router: Router, private userInfo: DataService) { }

  ngOnInit() {

    if (localStorage.getItem("1") == null ) {
      this.router.navigate(['auth']);
    }
    this.userInfo.getUserDetail(1).subscribe((data) => 
    {
      this.response = data;
      console.log(data);
    });
  }

  signOut() {
    this.authService.signOut().then(() => {
      localStorage.removeItem("1");
      this.router.navigate(['auth']);
    });
    
  }

}
