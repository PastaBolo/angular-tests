import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { DebugElement } from '@angular/core'

import { LoginComponent } from './login.component'
import { LoginService } from '../core/login.service'
import { By } from '@angular/platform-browser'

describe('LoginComponent', () => {
  let component: LoginComponent
  let service: LoginService
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [LoginService]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    service = TestBed.get(LoginService)
    fixture.detectChanges()
  })

  it('should login the user', () => {
    service.isAuthenticated = false
    fixture.detectChanges()
    let button = fixture.debugElement.query(By.css('button'))
    expect(button.nativeElement.textContent).toBe('Log in')

    button.triggerEventHandler('click', null)
    fixture.detectChanges()
    button = fixture.debugElement.query(By.css('button'))
    expect(button.nativeElement.textContent).toBe('Log out')
  })

  it('should logout the user', () => {
    service.isAuthenticated = true
    fixture.detectChanges()
    let button = fixture.debugElement.query(By.css('button'))
    expect(button.nativeElement.textContent).toBe('Log out')

    button.triggerEventHandler('click', null)
    fixture.detectChanges()
    button = fixture.debugElement.query(By.css('button'))
    expect(button.nativeElement.textContent).toBe('Log in')
  })
})
