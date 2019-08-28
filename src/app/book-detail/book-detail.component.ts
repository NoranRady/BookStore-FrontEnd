import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  product:any;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.rest.getProduct(this.route.snapshot.params['isbn']).subscribe(res => {
      console.log(res);
      this.product = res;
    });
  }

}
