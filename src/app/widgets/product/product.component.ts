import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../root-store/product-store/product.model';
import {Store, select} from '@ngrx/store';
import {ProductSelectors, ProductStoreActions, RootStoreState} from '../../root-store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products$: Observable<Product[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;
  slectedProduct$;

  constructor(private store$: Store<RootStoreState.RootState>) {
  }

  ngOnInit() {
    this.products$ = this.store$.select(ProductSelectors.selectAllProducts);
    this.error$ = this.store$.select(ProductSelectors.selectProductError);
    this.isLoading$ = this.store$.select(ProductSelectors.selectProductIsLoading);
    this.store$.dispatch(
      new ProductStoreActions.GetAllProductsRequestAction()
    );
  }

  getProductData(product) {
    this.store$.select(ProductSelectors.selectByProductId(product.id)).subscribe((data: Product) => this.slectedProduct$ = data);
  }

}
