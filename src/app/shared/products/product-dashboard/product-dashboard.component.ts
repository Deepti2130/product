import { Component, OnInit } from '@angular/core';

import { Iproduct } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
productArr ! : Array<Iproduct>
  constructor(
   private _productservice : ProductService
  ) { }

  ngOnInit(): void {
    this.productArr = this._productservice.fetchallProduct()
  }

}
