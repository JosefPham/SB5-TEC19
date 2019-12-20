import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  postForm:FormGroup = new FormGroup({
    username:new FormControl(null,Validators.required),
    text:new FormControl(null,Validators.required),
    created:new FormControl(null,Validators.required),
  })

  constructor(private router: Router, private userService: UserService) {
    this.userService.user().subscribe(
      data => console.log(data),
      error => this.router.navigate(['/login'])
    )
   }

  ngOnInit() {

  }

  // post() {
  //   if(!this.postForm.valid){
  //     console.log('Invalid Form'); 
  //     return;
  //   }

  //   this.userService.post(JSON.stringify(this.postForm.value))
  //   .subscribe(
  //     data=> console.log(data),
  //     error=> console.error(error)
  //   )
  //   // console.log(JSON.stringify(this.registerForm.value));
  // }



}
