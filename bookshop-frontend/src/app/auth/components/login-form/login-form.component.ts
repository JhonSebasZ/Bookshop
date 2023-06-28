import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  
  loginForm:FormGroup = new FormGroup({});

  @Output() login:EventEmitter<any> = new EventEmitter<any>

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  //submit the form
  onSubmit(){
    this.login.emit(this.loginForm)
  }
  
}
