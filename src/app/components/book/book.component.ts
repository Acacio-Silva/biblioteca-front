import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Book from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private bookService : BookService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.idBook = params['id']);
  }

  idBook!: number;
  book! : Book;

  ngOnInit(): void {
    this.getBookById();
  }

  getBookById(){
    this.bookService.getBookById(this.idBook).subscribe((data)=>{
      this.book = data;
    })
  }

}
