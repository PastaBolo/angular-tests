import { Component } from '@angular/core'
import { LoginService } from '../core/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  constructor(public loginService: LoginService) {}
}
