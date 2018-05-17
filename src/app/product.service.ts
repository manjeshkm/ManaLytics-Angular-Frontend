import { Injectable } from '@angular/core';
import { Product } from './Models/product';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import { Producthistory } from './Models/producthistory';

@Injectable()
export class ProductService {
  phistory: Producthistory = { 'edate': new Date(), 'etime': new Date(), 'pname': '', 'event': '', 'pdescrp': '' };
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:quotemark
  backendurl = 'http://localhost:8080/';
  save(res, body) {
    return this.http.post(this.backendurl + res, body, { headers: {'Content-Type': 'application/json'}});
  }

  getAll(res) {
    // tslint:disable-next-line:prefer-const
    return this.http.get(this.backendurl + res);
  }

  getById(res, id) {
    return this.http.get(this.backendurl + res + '/' + id );
  }

  edit(res, body: Product, id) {
    return this.http
    .post(this.backendurl + res, body, { headers: {'Content-Type': 'application/json'}} );
  }

  delete(res, id) {
    return this.http.get(this.backendurl + res + '/' + id + ' /delete');
  }

  addEvent(eventype, product) {
    // tslint:disable-next-line:prefer-const
    let date = new Date();
    this.phistory.edate = date;
    // this.phistory.etime = date.toLocaleTimeString();
    this.phistory.event = eventype;
    this.phistory.pname = product.pname;
    this.phistory.pdescrp = product.pdescrp;
    console.log('saving event');
    this.save('history', this.phistory).subscribe(data => console.log(data),
      err => console.log('error while saving event =>' + err.message));
  }
}
