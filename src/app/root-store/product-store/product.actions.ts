import {Action} from '@ngrx/store';
import {Product} from './product.model';

export enum ActionTypes {
  GET_ALL_PRODUCTS_REQUEST = '[All Products] Get All Products Request',
  GET_ALL_PRODUCTS_FAILURE = '[All Products] Get All Products Failure',
  GET_ALL_PRODUCTS_SUCCESS = '[All Products] Get All Products Success',
}

export class GetAllProductsRequestAction implements Action {
  readonly type = ActionTypes.GET_ALL_PRODUCTS_REQUEST;

  constructor() {
  }
}

export class GetAllProductsFailureAction implements Action {
  readonly type = ActionTypes.GET_ALL_PRODUCTS_FAILURE;

  constructor(public payload: { error: string }) {
  }
}

export class GetAllProductsSuccessAction implements Action {
  readonly type = ActionTypes.GET_ALL_PRODUCTS_SUCCESS;

  constructor(public payload: { products: Product[] }) {
  }
}

export type ProductActions =
  GetAllProductsRequestAction
  | GetAllProductsSuccessAction
  | GetAllProductsFailureAction;
