import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  private url = 'http://35.231.21.19:15647/api/accounts/login/';
  private httpOptions;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
  }

  public login(user: string, pass: string) {
    this.http.post(
      this.url,
      'user=test&pass=test20181',
      this.httpOptions
    ).subscribe((data) => {
      debugger;
    });

  }

}
