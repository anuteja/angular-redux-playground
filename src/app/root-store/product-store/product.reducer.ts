import {ProductActions, ActionTypes} from './product.actions';
import {initialState, productAdapter, ProductState} from './product.state';

export function productReducer(state = initialState, action: ProductActions): ProductState {
  switch (action.type) {
    case ActionTypes.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ActionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return productAdapter.addAll(action.payload.products, {
        ...state,
        error: null,
        isLoading: false
      });
    case ActionTypes.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };
    default: {
      return state;
    }
  }
}
