import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from './services/authservice ';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routeguard';

  constructor (private authService:AuthguardService, 
    private router:Router) {
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['home']);
  }
 
}
