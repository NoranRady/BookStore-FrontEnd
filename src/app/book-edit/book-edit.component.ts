import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  @Input() productData:any = {  bookname:'', isbn: 0 , author: '', publicationDate: '', language: '', description: '' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['isbn']).subscribe((data: {}) => {
      console.log(data);
      this.productData = data;
    });
  }

  updateProduct() {
    this.rest.updateProduct(this.route.snapshot.params['isbn'], this.productData).subscribe((result) => {
      console.log("new");
      console.log(this.productData.isbn);
      this.router.navigate(['/book-details/'+this.productData.isbn]);
      //this.router.navigate(['/book-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
