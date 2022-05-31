import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  constructor(private userService : UserService) { }

  users?: User[];

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void{
    this.userService.getAllUsers().subscribe((data)=>this.users = data)
  }

}
