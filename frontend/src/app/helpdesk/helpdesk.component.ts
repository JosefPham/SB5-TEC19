import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.css']
})
export class HelpdeskComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
    this.userService.user().subscribe(
      data => console.log(data),
      error => this.router.navigate(['/login'])
    )
   }
  ngOnInit() {
  }

}
