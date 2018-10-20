import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router:Router) { 
    // document.body.style.background = 'rgba(0, 0, 0, .6)';
    document.body.style.backgroundImage = "url('assets/homeBG.jpg')";
  }

  ngOnInit() {
  }

  moveToNotes(){
    this._router.navigate(['/notes']);
  }

}
