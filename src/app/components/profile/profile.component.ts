
import { UserService } from './../../services/user.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import User from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!: User;

  cCategory: number = 0;
  leitorTI?: string;
  leitorFC?: string;
  leitorMU?: string;
  trofeus: boolean = false;

  constructor(private userService:UserService) { }

  

  ngOnInit(): void {
    this.findUserByName();
    
  }

  ngAfterViewInit():void{
    for(let a of this.user.books!){
      if(a.category.name=="Tecnologia da Informação"){
        this.cCategory = this.cCategory +1;
        if(this.cCategory>=5){
          this.leitorTI = "Leitor de Tecnologia da Informação"
          this.trofeus = true
        }
      }


      if(a.category.name=="Ficção cientifica"){
        this.cCategory = this.cCategory +1;
        if(this.cCategory>=5){
          this.leitorFC = "Leitor de Ficção cientifica"
          this.trofeus = true
        }
      }


      if(a.category.name=="Musica"){
        this.cCategory = this.cCategory +1;
        if(this.cCategory>=5){
          this.leitorMU = "Leitor de Musica"
          this.trofeus = true
        }
      }
    }
  }

  name: string | null = localStorage.getItem("user");

  findUserByName(){
    this.userService.getUserByName(this.name!).subscribe((data)=>{
    this.user = data;
    })
  }

  countCategory(){
    for(let i of this.user.books!){
      if(i.category.name == "Tecnologia da Informação"){
        this.cCategory = this.cCategory + 1;
      }
    }
  }

}
