import { Component, OnInit } from '@angular/core';
// import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Product } from '../Models/product';
import { Observable } from 'rxjs/Observable';
import { Producthistory } from '../Models/producthistory';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  product: Product = {'id': 0, 'pname': '', 'pqvalue': 0, 'pqtype': '', 'pcost': 0, 'purl': '', 'pdescrp': '' };
  constructor(private productservice: ProductService, private router: Router) { }
  products$: Observable<Object>;
  ngOnInit() {
    // tslint:disable-next-line:arrow-return-shorthand
    this.products$ = this.productservice.getAll('products');
  }

  delete(pid) {
    if (confirm('Are you sure you want to Delete this product')) {
      this.productservice.getById('products', pid).subscribe(resp => {
        this.product = resp;
        console.log(this.product);
      });
      this.productservice.delete('products', pid).subscribe(resp => console.log(resp),
        err => {
          console.log('error occured =>' + err.message);
        },
        () => {
          this.productservice.addEvent('DELETED', this.product);
        });
        this.router.navigateByUrl('/products');
       location.reload();
    }
  }
  addToBill(checked, produc) {
    console.log(checked + produc.pname);
  }
}
