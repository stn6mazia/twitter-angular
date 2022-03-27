import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() currentUser:User = new User()
  faTwitter = faTwitter
  faLogout = faArrowRightFromBracket

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    sessionStorage.removeItem('session')
    this.router.navigateByUrl('login')
  }

}
