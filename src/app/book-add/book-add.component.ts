import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  @Input() productData = { bookname:'', isbn: 0 , author: '', publicationDate: '', language: '', description: ''};

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addProduct() {
    this.rest.addProduct(this.productData).subscribe(result => {
     
     // console.log(result._id);
      console.log(this.productData.isbn);
      this.router.navigate(['/book-details/'+this.productData.isbn]);
    }, (err) => {
      console.log(err);
    });
  }

}
