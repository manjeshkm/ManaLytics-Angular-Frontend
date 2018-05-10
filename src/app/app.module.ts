import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductService } from './product.service';
import { ViewProductsComponent } from './view-products/view-products.component';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HistroyComponent } from './histroy/histroy.component';
import { HelpersService } from './helpers.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BillingKartComponent } from './billing-kart/billing-kart.component';

const appRoutes: Routes = [
  { path: 'createproduct', component: CreateProductComponent },
  { path: 'products/:id', component: EditProductComponent },
  { path: 'products', component: ViewProductsComponent },
  { path: 'histroy', component: HistroyComponent },
  { path: 'billingkart', component: BillingKartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ViewProductsComponent,
    EditProductComponent,
    HistroyComponent,
    BillingKartComponent
  ],
  imports: [
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    ProductService,
    HelpersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
