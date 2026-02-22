import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import { Auth } from '../../auth/auth';
import { LoginForm } from '../../data/interfaces/form.type';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {

  loginForm!: LoginForm

  authService = inject(Auth);
  router = inject(Router);
  fb = inject(NonNullableFormBuilder);

  ngOnInit(){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.loginForm.invalid) return;
    const credentials = this.loginForm.getRawValue()
     this.authService.login(credentials).subscribe(res => {
      this.router.navigate([''])
     })
    console.log(credentials)
  }
}


