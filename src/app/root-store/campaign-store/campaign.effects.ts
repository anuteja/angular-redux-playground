
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {DataService} from '../../services/data.service';
import * as campaignActions from './campaign.actions';

@Injectable()
export class CampaignEffects {

    constructor(private dataService: DataService, private actions$: Actions) {

    }

    @Effect()
    getAllCampaignRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<campaignActions.GetAllCampaignsRequestAction>(
          campaignActions.CampaignActionTypes.GET_ALL_CAMPAIGNS_REQUEST
        ),
        switchMap(action =>
            this.dataService
                .getAll()
                .pipe(
                    map(
                        (response: any) =>
                            new campaignActions.GetAllCampaignsSuccessAction({
                                campaigns: response.campaigns
                            })
                    ),
                    catchError(error =>
                        observableOf(new campaignActions.GetAllCampaignsFailureAction({error}))
                    )
                )
        )
    );
}
