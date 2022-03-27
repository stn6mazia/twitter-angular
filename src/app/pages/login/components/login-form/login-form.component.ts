import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Session } from 'src/app/shared/models/session';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  session: Session = new Session();
  registeredUsers: User[] = []

  loginError = {
    status: false,
    message: ''
  }

  loginField = {
    fieldName: 'login-field-name',
    fieldId: 'login-field-id',
    fieldLabel: 'Login',
    fieldType: 'text',
    isRequired: true,
    fieldHaveMask: false,
    fieldMask: ''
  }

  passwordField = {
    fieldName: 'password-field-name',
    fieldId: 'password-field-id',
    fieldLabel: 'Password',
    fieldType: 'text',
    isRequired: true,
    fieldHaveMask: false,
    isPassword: true,
    fieldMask: '',
    showPassword: false
  }

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!sessionStorage['session']) {
      this.session = new Session();
    } else {
      this.session = JSON.parse(sessionStorage['session']);
    }
    if (!sessionStorage['registeredUsers']) {
      this.registeredUsers = [];
    } else {
      this.registeredUsers = JSON.parse(sessionStorage['registeredUsers']);
    }
  }

  login() {
    this.session.login = `@${this.checkLogin(this.session.login)}`

    if (this.registeredUsers.length == 0) {
      this.errorLogin('This user is not registered. Please, create an account.')
    } else {
      let currentUser = this.registeredUsers.find(user => user.login === `${this.session.login}`)
      console.log(currentUser)
      if (currentUser) {
        if(this.session.password.length > 0) {          
          if (this.checkPassword(currentUser, this.session.password)) {
            this.loginError.status = true
            sessionStorage.setItem('session', JSON.stringify(currentUser))
            this.router.navigateByUrl('feed')
          } else {
            this.errorLogin('User or password is invalid. Please, try again')
          }
        } else {
          this.errorLogin('Password can not be empty.')
        }
      } else {
        if(this.session.password.length > 0) {
          this.errorLogin('This user is not registered. Please, create an account.')
        } else {
          this.errorLogin('Password can not be empty.')
        }
      }
    }
  }

  errorLogin(text: string) {
    this.loginError.status = false
    this.loginError.message = text

    this.toastr.warning(text, 'Atention');
  }

  checkPassword(currentUser: User, sessionPassword: string) {
    if (currentUser.password === btoa(sessionPassword)) {
      return currentUser
    } else {
      return null
    }
  }

  checkLogin(login: string) {
    if (login.charAt(0) !== '@') {
      return login;
    } else {
      return login.split('@').join('');
    }
  }

}
