import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleLogin(loginForm: NgForm): void{
    console.log('Loggin In....');
    this.authService.login(loginForm.value)
      .subscribe( (res: any)=>{
        console.log(res);
        sessionStorage.setItem('authToken', res.token);
      });
  }
}
