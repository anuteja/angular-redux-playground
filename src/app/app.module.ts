import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './widgets/product/product.component';
import { Widget2Component } from './widgets/widget2/widget2.component';
import {RootStoreModule} from './root-store';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Widget2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
