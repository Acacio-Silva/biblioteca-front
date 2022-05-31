import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import Book from 'src/app/models/book';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books?: Book[];
  name: string | null = localStorage.getItem("user")
  bookId?: number;
  constructor(private bookService : BookService, private userService: UserService) { 
  }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void{
    this.bookService.getAllBooks().subscribe((data)=>this.books = data);
  }

  addBook(id:any){
    this.userService.addBook(id, this.name!).subscribe((data)=>{
      alert(`Livro adicionado com sucesso! ${data.books![data.books!.length]}`)
    }, (err)=>{
      alert(err.data.message)
    });
    //console.log(id, this.name)
  }
}
