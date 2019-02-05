
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {DataService} from '../../services/data.service';
import * as productActions from './product.actions';

@Injectable()
export class ProductStoreEffects {

    constructor(private dataService: DataService, private actions$: Actions) {

    }

    @Effect()
    getAllproductRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<productActions.GetAllProductsRequestAction>(
            productActions.ActionTypes.GET_ALL_PRODUCTS_REQUEST
        ),
        switchMap(action =>
            this.dataService
                .getAll()
                .pipe(
                    map(
                        (response: any) =>
                            new productActions.GetAllProductsSuccessAction({
                                products: response.products
                            })
                    ),
                    catchError(error =>
                        observableOf(new productActions.GetAllProductsFailureAction({error}))
                    )
                )
        )
    );
}
