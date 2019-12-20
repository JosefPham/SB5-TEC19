import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService : AuthentificationService, private router : Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
