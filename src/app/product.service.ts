import { Injectable } from '@angular/core';
import { Product } from './Models/product';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Producthistory } from './Models/producthistory';

@Injectable()
export class ProductService {
  phistory: Producthistory = { 'edate': '', 'etime': '', 'pname': '', 'event': '', 'pdescrp': '' };
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:quotemark
  backendurl = 'http://localhost:3000/';
  save(res, body) {
    return this.http.post<Product>(this.backendurl + res, body);
  }
  getAll(res) {
    // tslint:disable-next-line:prefer-const
    let products$;
    return this.http.get(this.backendurl + res);
  }

  getById(res, id) {

    // const param = {'id': id};
    return this.http.get<Product>(this.backendurl + res, { params: { 'id': id } });

  }

  edit(res, body, id) {
    return this.http.put<Product>(this.backendurl + res + '/' + id, body);
  }

  delete(res, id) {
    return this.http.delete(this.backendurl + res + '/' + id);
  }

  addEvent(eventype, product) {
    // tslint:disable-next-line:prefer-const
    let date = new Date();
    this.phistory.edate = date.toLocaleDateString();
    this.phistory.etime = date.toLocaleTimeString();
    this.phistory.event = eventype;
    this.phistory.pname = product.pname;
    this.phistory.pdescrp = product.pdescrp;
    console.log('saving event');
    this.save('history', this.phistory).subscribe(data => console.log(data),
      err => console.log('error while saving event =>' + err.message));
  }
}
