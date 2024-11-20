import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, productstatus } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
@Input() productobj! :Iproduct;
//it is public property
productstatus = productstatus
  constructor(
    private _productservice : ProductService
  ) { }

  ngOnInit(): void {
  }

  onStatuschange(updatedstatus:productstatus){
  console.log(this.productobj)
  console.log(updatedstatus)

  // this.productobj.pstatus = updatedstatus
  // this._productservice.updatedstatus(this.productobj)

  this._productservice.updatedstatus(updatedstatus, this.productobj.pId)
  }

}
