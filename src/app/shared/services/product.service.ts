import { Injectable } from '@angular/core';
import { Iproduct, productstatus } from '../model/product';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productArr:Array<Iproduct> = [
    {
      pname:"Iphone 15",
      pdetails:'48MP Main: 26 mm, ƒ/1.6 aperture, sensorshift optical image stabilisation, 100% Focus Pixels, support for super-high-resolution photos (24MP and 48MP)',
      pId:"123",
      pstatus:productstatus.Inprogress
    },
    {
      pname:"Iphone 16 pro",
      pdetails:'48MP Main: 26 mm, ƒ/1.6 aperture, sensorshift optical image stabilisation, 100% Focus Pixels, support for super-high-resolution photos (24MP and 48MP)',
      pId:"124",
      pstatus:productstatus.Dispatched
    },
    {
      pname:"Iphone 13",
      pdetails:'48MP Main: 26 mm, ƒ/1.6 aperture, sensorshift optical image stabilisation, 100% Focus Pixels, support for super-high-resolution photos (24MP and 48MP)',
      pId:"125",
      pstatus:productstatus.Delivered
    }
  ]
  constructor(
    private _snackBar : SnackBarService
  ) { }

  fetchallProduct():Array<Iproduct>{
    //API call to get all product
    return this.productArr


  }

  Addnewproduct(productobj : Iproduct){
    //API call to add new product in DB
    this.productArr.push(productobj)

    //msg
    this._snackBar.opensnackBar(`New product ${productobj.pname} is added successfully!!!`)
  }

  updatedstatus(updatedstatus:productstatus, pId:string){
 //API call to update the status of product in DB

//  let getIndex = this.productArr.findIndex(prod => prod.pId === productobj.pId);

//  this.productArr[getIndex] = productobj
let getIndex = this.productArr.findIndex(prod => prod.pId === pId)

this.productArr[getIndex].pstatus = updatedstatus

//msg
this._snackBar.opensnackBar(`The product status of ${updatedstatus} is updated successfully!!!`)
}
}
