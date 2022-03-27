import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Session } from 'src/app/shared/models/session';
import { User } from 'src/app/shared/models/user';
import { confirmPasswordField, emailField, loginField, nameField, passwordField } from './register-form-model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  session: Session = new Session();
  registeredUsers: User[] = []
  user: User = new User()

  loginError = {
    status: false,
    message: ''
  }

  confirmPassword = ''

  loginField = loginField
  nameField = nameField
  emailField = emailField
  passwordField = passwordField
  confirmPasswordField = confirmPasswordField

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!sessionStorage['registeredUsers']) {
      this.registeredUsers = [];
    } else {
      this.registeredUsers = JSON.parse(sessionStorage['registeredUsers']);
    }
  }

  register() {
    const isIdenticalLogin = this.registeredUsers.find(user => user?.login.toUpperCase().trim() === `@${this.user.login.toUpperCase().trim()}`)
    const isIdenticalEmail = this.registeredUsers.find(user => user?.email.toUpperCase().trim() === this.user.email.toUpperCase().trim())

    if (this.registeredUsers.length > 0) {
      if (!isIdenticalLogin) {
        if (!isIdenticalEmail) {
          this.makeRegisterValidation()
        } else {
          this.errorRegister('User already registered with this email.')
        }
      } else {
        this.errorRegister('User already registered with this login.')
      }
    } else {
      this.makeRegisterValidation()
    }
  }

  makeRegisterValidation() {
    if (this.user.name.length > 0) {
      const validEmail = this.checkValidEmail(this.user.email)
      if (validEmail) {
        const equalPassword = this.checkEqualPassword(this.user.password.toUpperCase(), this.confirmPassword.toUpperCase())
        if (equalPassword) {
          this.saveUser()
        } else {
          this.errorRegister('Password is not equal.')
        }
      } else {
        this.errorRegister('Email is invalid.')
      }
    } else {
      this.errorRegister('Name is empty.')
    }
  }

  saveUser() {
    const body = new User().deserialize(
      {
        name: this.user.name,
        email: this.user.email.trim(),
        password: btoa(this.user.password),
        login: `@${this.user.login}`
      }
    )

    this.registeredUsers.push(body)

    sessionStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers))
    this.router.navigateByUrl('login')
  }

  checkEqualPassword(password: string, confirmPassword: string) {
    if (password === confirmPassword) {
      return true
    } else {
      return false
    }
  }

  checkValidEmail(evt: string) {
    if (evt.includes('@')) {
      let emailAfterArroba = evt.split('@')

      if (emailAfterArroba[1]) {
        if (emailAfterArroba[1].includes('.')) {
          let afterDotAfterArroba = emailAfterArroba[1].split('.')

          if (afterDotAfterArroba[1]) {
            this.loginError.status = true
            this.loginError.message = ''
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  }

  errorRegister(text: string) {
    this.loginError.status = false
    this.loginError.message = text

    this.toastr.warning(text, 'Atention');
  }
}
