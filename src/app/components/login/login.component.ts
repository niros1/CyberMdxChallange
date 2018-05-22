import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: string;
  public password: string;
  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  onSubmit($event) {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.loginService.login(this.user, this.password);
  }

}
