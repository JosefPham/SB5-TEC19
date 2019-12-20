import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private userService: UserService) {}
  title = 'sb5-tec19-project';
  logout() {
    this.userService.logout().subscribe(
      data => {
        console.log(data),
        this.router.navigate(['/login'])
      },
      error => console.error(error)
    )
  }
}
