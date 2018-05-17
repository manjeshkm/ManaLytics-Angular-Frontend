import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Producthistory } from '../Models/producthistory';


@Component({
  selector: 'app-histroy',
  templateUrl: './histroy.component.html',
  styleUrls: ['./histroy.component.css']
})
export class HistroyComponent implements OnInit {
  constructor(private productservice: ProductService, private router: Router) { }
  history$: Observable<Object>;
  ngOnInit() {
    // tslint:disable-next-line:arrow-return-shorthand
   this.history$ = this.productservice.getAll('history');
    // console.log(this.fromDate);
  }

  getDate(fdate, tdate) {
    let fromDate; let toDate;
    if (fdate === '') { fromDate = new Date().toLocaleDateString(); }
     if ( tdate === '') {
      toDate = new Date().toLocaleDateString();
    } if (fdate !== '' || tdate !== '') {
      fromDate = fdate.toLocaleDateString();
      toDate = tdate.toLocaleDateString();
    }
    console.log('fromDate---->' + fromDate   + 'toDate--->' + toDate);
    // tslint:disable-next-line:prefer-const
    let from = fdate;
    // tslint:disable-next-line:prefer-const
    let to = tdate;
    this.history$ = this.productservice.getAll('history/event?from=' + fromDate + '&to=' + toDate);
    console.log('history---->>>>' + this.history$);
  }
}
