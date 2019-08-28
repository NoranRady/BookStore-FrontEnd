import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  products:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = [];
    this.rest.getProducts().subscribe(res => {console.log(res);
      this.products = res;
    });
  }

  add() {
    this.router.navigate(['/book-add']);
  }

  delete(id) {
    this.rest.deleteProduct(id)
      .subscribe(res => {
          this.getProducts();
        }, (err) => {
          console.log(err);
        }
      );
  }

}