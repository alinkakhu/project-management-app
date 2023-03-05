import { Component } from '@angular/core';
import { Api } from '../common/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  password: string = '';
  token: string = '';

  async onSubmit() {
    if (!this.login || !this.password) {
      return;
    }
    const response = await Api.getInstance().post('auth/signin', {
      login: this.login,
      password: this.password
    });
    this.token = response.token;
  }
}
