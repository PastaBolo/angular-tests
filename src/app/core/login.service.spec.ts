import { TestBed } from '@angular/core/testing'

import { LoginService } from './login.service'

describe('LoginService', () => {
  let service: LoginService

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LoginService] })
    service = TestBed.get(LoginService)
  })

  it('should log in', () => {
    service.isAuthenticated = false
    service.login()
    expect(service.isAuthenticated).toBeTruthy()
  })

  it('should log out', () => {
    service.isAuthenticated = true
    service.logout()
    expect(service.isAuthenticated).toBeFalsy()
  })
})
