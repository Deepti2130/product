import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { productModule } from './shared/products/product.module';
import { FormsModule } from '@angular/forms';
import { materialModule } from './shared/material/material.module';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    productModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    materialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
