import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { Product } from '../Models/product';
import 'rxjs/add/operator/map';
import { Producthistory } from '../Models/producthistory';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  // initalising or else ul get cant find pname of undefined error
  product: Product = { 'pname': '', 'pqvalue': 0, 'pqtype': '', 'pcost': 0, 'purl': '', 'pdescrp': '' };

  quantOptions = ['Select', 'Kgs', 'Lts', 'Count'];
  id = this.route.snapshot.paramMap.get('id');
  constructor(private productservice: ProductService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:curly
    if (this.id) this.productservice.getById('products', this.id).subscribe(resp => {
      this.product = resp[0];
      console.log(this.product);
    });

  }
  edit(edited) {
    this.productservice.edit('products', edited, this.id).subscribe(data => console.log(data),
      err => console.log('Error occured while editing.' + err.message), () => {
        this.productservice.addEvent('EDITED', edited);
      });
    this.router.navigate(['/products']);
    location.reload();
  }
}
