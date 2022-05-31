import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-read-books',
  templateUrl: './read-books.component.html',
  styleUrls: ['./read-books.component.scss']
})
export class ReadBooksComponent implements OnInit {

  user!: User;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.findUserByName();
  }

  name: string | null = localStorage.getItem("user");

  findUserByName(){
    this.userService.getUserByName(this.name!).subscribe((data)=>{
    this.user = data;
    })
  }

}
