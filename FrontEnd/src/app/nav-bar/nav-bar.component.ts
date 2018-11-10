import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userDetails;
  username:String;
  LoginStatus:String;

  constructor(private userService: UserService, private router: Router) { 
    this.LoginStatus = this.userService.loginStatus;
    this.username = "USERNAME";
  }

  
  ngOnInit() { 
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.username = this.userDetails.fullName.toUpperCase();
      },
      err => { 
        this.username = "USERNAME";
        console.log(err);
        
      }
    );
    this.userService.loginStatusEmitter.subscribe(status => {
      this.LoginStatus = status;
    });
  }

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
