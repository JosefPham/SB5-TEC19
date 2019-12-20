import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sessionStatus;
  username:String='';
  constructor(private router: Router, private userService: UserService) {
    this.userService.user().subscribe(
      data => this.getUserName(data),
      error => this.router.navigate(['/login'])
    )
   }

   getUserName(data) {
     this.username = data.firstname + ' ' + data.lastname;
   }

  ngOnInit() {

    // const fetchPromise = fetch("http://localhost:8080/api/checkSession?sessionToken=" +sessionStorage.getItem("sessionToken") );
    // fetchPromise.then(response => {
    //   return response.json();
    // }).then(apiresult => {
    //   this.sessionStatus = apiresult;
    //   console.log(this.sessionStatus);
    //   if(this.sessionStatus === false || this.sessionStatus === null || this.sessionStatus === undefined) {
    //     console.log("You are not logged in");
    //     this.router.navigateByUrl('/login');
    //   }
    //   else{
    //    // this.router.navigateByUrl('/settings');
    //   }
    // })
    // console.log(sessionStorage.getItem("sessionToken"));

  }

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
