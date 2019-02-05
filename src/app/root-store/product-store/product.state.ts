import {Product} from './product.model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: model => model.id
});

export interface ProductState extends EntityState<Product> {
  isLoading: boolean;
  error: string;
}

export const initialState: ProductState = productAdapter.getInitialState({
  isLoading: false,
  error: null
});

