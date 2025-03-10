import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  
})
export class UserService {

  constructor(private http: HttpClient) { }

  post(body:any) {
    return this.http.post('http://127.0.0.1:3000/users/announcement', body,{
      observe:'body',
      withCredentials: true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  register(body:any) {
    return this.http.post('http://127.0.0.1:3000/users/register',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  login(body:any) {
    return this.http.post('http://127.0.0.1:3000/users/login',body,{
      observe:'body',
      withCredentials: true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  user() {
    return this.http.get('http://127.0.0.1:3000/users/user',{
      observe:'body',
      withCredentials: true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  logout() {
    return this.http.get('http://127.0.0.1:3000/users/logout', {
      observe: 'body',
      withCredentials: true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
}
