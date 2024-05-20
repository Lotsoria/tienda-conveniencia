import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest, registerRequest } from 'src/app/core/interface/login.interface';
import { UsuariosInterface } from 'src/app/core/interface/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./css/login.component.css']
})
export class LoginComponent implements OnInit{
  loginOn = false;
  userData?:UsuariosInterface;
  
  registerForm = this.formBuilder.group({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
  });
  loginForm = this.formBuilder.group({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  dataRegister?: registerRequest;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ){}

  ngOnInit(): void {
      
  }
  togglePanel(activePanel: 'signUp' | 'signIn') {
    const container = document.getElementById('container');
    if (activePanel === 'signUp') {
      container?.classList.add('right-panel-active');
    } else {
      container?.classList.remove('right-panel-active');
    }
  }

  login(){
    console.log(this.loginForm.value)

    this.authService.login(this.loginForm.value as LoginRequest).subscribe({
      next: (response) => {
        console.log(response);
        this.userData = this.authService.currentUserData.getValue();
      },
      error: (error) => {
        console.log('Login failed:', error);
      },
      complete: () => {
        console.log("Login completo");
        this.authService.currentUserLoginOn.subscribe((data) => {
          this.loginOn = data;
          console.log(this.loginOn);
        });
        console.log(this.loginOn);
        this.router.navigateByUrl('/home');
        this.loginForm.reset();   
      }
    })
  };

  register(){
    console.log(this.registerForm.value)
    this.dataRegister = this.registerForm.value as registerRequest
    this.authService.register(this.dataRegister)
  }
}
