import { LoginService } from './../../services/login.service';
import { Component, Input, OnInit } from '@angular/core';


export interface Login{
  username:string,
  password:string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logado: boolean = false;
  visible: boolean = true;
  
  username:string | null = localStorage.getItem("login");
  token:string | null = localStorage.getItem("token");


  userLogin: Login = {
    username :'',
    password: ''
  };

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
    this.isLogged();
  }

  isLogged(){
    if((localStorage.getItem("user")&& (localStorage.getItem("token")) != null)){
      this.logado = true;
      this.visible = false;
    }
  }
  

  signin(){
    this.loginService.signin(this.userLogin).subscribe((data)=>{
      localStorage.setItem("user", data.login)
      localStorage.setItem("token", data.token)
      this.logado = true;
      this.visible = false;
    })
  }

}
