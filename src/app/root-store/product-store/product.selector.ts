import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {productAdapter, ProductState} from './product.state';
import {Product} from './product.model';

export const getError = (state: ProductState): any => state.error;

export const getIsLoading = (state: ProductState): boolean => state.isLoading;

export const selectProductState: MemoizedSelector<object,
  ProductState> = createFeatureSelector<ProductState>('product');

export const selectAllProducts: (
  state: object
) => Product[] = productAdapter.getSelectors(selectProductState).selectAll;

export const selectByProductId = (id: number) =>
  createSelector(this.selectAllProducts, (allProducts: Product[]) => {
    if (allProducts) {
      return allProducts.find(p => p.id === id);
    } else {
      return null;
    }
  });

export const selectProductError: MemoizedSelector<object, any> = createSelector(
  selectProductState,
  getError
);

export const selectProductIsLoading: MemoizedSelector<object,
  boolean> = createSelector(selectProductState, getIsLoading);
