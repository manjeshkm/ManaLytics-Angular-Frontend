import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { HelpersService } from '../helpers.service';
import { Product } from '../Models/product';
import { Producthistory } from '../Models/producthistory';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  constructor(private productservice: ProductService, private router: Router) { }
  quantOptions = ['Select', 'Kgs', 'Lts', 'Count'];
  defaultSelect = this.quantOptions[0];


  save(product: Product) {
    this.productservice.save('products', product).subscribe(data => {
      console.log(data);
      console.log('Cost: ' + data.pcost);
      console.log('Quantity: ' + data.pqvalue);
    },
      err => {
        console.log('error occured =>' + err.message);
      },
      () => {
        this.productservice.addEvent('ADDED', product);
      });
    this.router.navigateByUrl('/products');
    location.reload();
  }
}
