import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStoreModule } from './product-store/product-store.module';
import { Widget2StoreModule } from './widget2-store/widget2-store.module';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductStoreModule,
    Widget2StoreModule,
    StoreModule.forRoot({})
  ]
})
export class RootStoreModule { }
