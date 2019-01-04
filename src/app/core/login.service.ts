import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAuthenticated: boolean = false

  login(): void {
    this.isAuthenticated = true
  }

  logout(): void {
    this.isAuthenticated = false
  }
}
