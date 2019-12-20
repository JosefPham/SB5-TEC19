import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthentificationService } from  '../authentification.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmitted  =  false;
  LoginStatus;
  loginForm : FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null, Validators.required)
  });

  constructor(private authService: AuthentificationService, private router: Router, private userService: UserService) { }

  ngOnInit() {

  }

  moveToRegister() {
    this.router.navigate(['/register']);
  }

  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(!this.loginForm.valid) {
      console.log('Invalid');
      return;
    }
    console.log(JSON.stringify(this.loginForm.value.password));
    this.userService.login(JSON.stringify(this.loginForm.value)).subscribe(
      data => { 
        console.log(data);
        this.router.navigate( ['/home'] ); 
      },
      error => console.log(error)
    )

    
    // this.authService.login(this.loginForm.value);
    // const fetchPromise = fetch("http://localhost:8080/api/login?username=" + this.loginForm.value.email + "&password=" + this.loginForm.value.password);
    // fetchPromise.then(response => {
    //   return response.json();
    // }).then(apiresult => {
    //   this.LoginStatus = apiresult;

      
    //   console.log(this.LoginStatus);
    //   if(this.LoginStatus.loggedIn === true) {
    //     sessionStorage.setItem("sessionToken", this.LoginStatus.sessionToken);
    //     this.router.navigateByUrl('/home');
    //   }
    //   else{
    //     alert(this.LoginStatus.msg);
    //   }
    // })

 
  }
  

}
