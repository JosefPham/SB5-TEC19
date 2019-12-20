import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  timeLeft: number = 60;
  timeWorkedHours = 0;
  timeWorkedMinutes = 0;
  timeWorkedSeconds = 0;
  interval;
  apiData;


  constructor(private router: Router, private userService: UserService) {
    this.userService.user().subscribe(
      data => console.log(data),
      error => this.router.navigate(['/login'])
    )
   }
  ngOnInit() {
    // const fetchPromise = fetch("http://localhost:8080/api/time?sessionToken=" + sessionStorage.getItem("sessionToken"));
    // fetchPromise
    // .then(response => {
    //   return response.json();
    // })
    // .then(apiresult => {
    //   this.apiData = apiresult;
    // })
}

// startTimer() {
//   this.timeWorkedHours = this.apiData[0].hours;
//   this.interval = setInterval(() => {
//     if(this.timeWorkedSeconds == 60) {
//       this.timeWorkedSeconds = 0;
//       this.timeWorkedMinutes++;
//     } else if(this.timeWorkedMinutes == 60) {
//       this.timeWorkedMinutes = 0;
//       this.timeWorkedHours++;
//     }
//       this.timeWorkedSeconds++;
//   },1000)
// }

// pauseTimer() {
//   clearInterval(this.interval);
// }

}
