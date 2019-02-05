import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStoreModule } from './product-store/product-store.module';
import { CampaignStoreModule } from './campaign-store/campaign-store.module';
import { EffectsModule } from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {environment} from 'src/environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductStoreModule,
    CampaignStoreModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ]
})
export class RootStoreModule { }
