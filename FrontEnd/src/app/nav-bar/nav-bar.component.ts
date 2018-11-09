import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  username:String='USERNAME';
  LoginStatus:String;

  constructor(private userService: UserService, private router: Router) { 
    this.LoginStatus = this.userService.loginStatus;
    console.log(this.LoginStatus)

  }

  
  ngOnInit() { 
    this.userService.loginStatusEmitter.subscribe(status => {
      this.LoginStatus = status;
      console.log(this.LoginStatus)
    })
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
