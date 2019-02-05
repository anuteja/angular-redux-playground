import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {productReducer} from './product.reducer';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ProductStoreEffects} from './product.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('product', productReducer),
    EffectsModule.forFeature([ProductStoreEffects])
  ]
})
export class ProductStoreModule { }
