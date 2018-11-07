import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notes By Nerds';

  constructor( ) { 
    // document.body.style.background = 'rgba(0, 0, 0, .6)';
    document.body.style.backgroundImage = "url('assets/homeBG.jpg')";
  }
}
