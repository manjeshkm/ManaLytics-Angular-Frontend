import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


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
    this.history$ = this.productservice.getAll('history?_sort=edate,etime&_order=desc,desc');
    // console.log(this.fromDate);
  }

  getDate(fdate, tdate) {
    if (fdate === '' || tdate === '') {
      fdate = new Date();
      tdate = new Date();
    }
    // tslint:disable-next-line:prefer-const
    let fromDate = fdate.toLocaleDateString();
    // tslint:disable-next-line:prefer-const
    let toDate = tdate.toLocaleDateString();
    this.history$ = this.productservice.getAll('history?edate_gte=' + fromDate + '&edate_lte=' + toDate);
    console.log('in get date' + fromDate, toDate);
  }
}
