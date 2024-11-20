import { NgModule } from "@angular/core";
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from "@angular/common";
import { materialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductFormComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    materialModule,
    FormsModule
  ],
  exports: [ProductDashboardComponent]
})
export class productModule{
constructor(){
  console.log('pdoduct module loaded')
}


}
