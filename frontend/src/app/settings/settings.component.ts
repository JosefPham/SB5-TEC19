import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
    this.userService.user().subscribe(
      data => console.log(data),
      error => this.router.navigate(['/login'])
    )
   }
  ngOnInit() {
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
