import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { productstatus } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
@ViewChild('productForm ') productForm ! : NgForm
  constructor(
    private _uuidservice : UuidService,
    private _productservice: ProductService
  ) { }

  ngOnInit(): void {
  }

  onProductAdd(){
   if(this.productForm.valid){
    let productobj = {...this.productForm.value,
      pId:this._uuidservice.generateUuid(),
      pstatus:productstatus.Inprogress
    };
    console.log(productobj)
    this._productservice.Addnewproduct(productobj)
    this.productForm.reset()
   }
  }

}
