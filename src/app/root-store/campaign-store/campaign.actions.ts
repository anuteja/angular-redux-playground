import {Action} from '@ngrx/store';
import {Campaign} from './campaign.model';

export enum CampaignActionTypes {
  GET_ALL_CAMPAIGNS_REQUEST = '[All Campaigns] Get All Campaigns Request',
  GET_ALL_CAMPAIGNS_FAILURE = '[All Campaigns] Get All Campaigns Failure',
  GET_ALL_CAMPAIGNS_SUCCESS = '[All Campaigns] Get All Campaigns Success',
}

export class GetAllCampaignsRequestAction implements Action {
  readonly type = CampaignActionTypes.GET_ALL_CAMPAIGNS_REQUEST;

  constructor() {
  }
}

export class GetAllCampaignsFailureAction implements Action {
  readonly type = CampaignActionTypes.GET_ALL_CAMPAIGNS_FAILURE;

  constructor(public payload: { error: string }) {
  }
}

export class GetAllCampaignsSuccessAction implements Action {
  readonly type = CampaignActionTypes.GET_ALL_CAMPAIGNS_SUCCESS;

  constructor(public payload: { campaigns: Campaign[] }) {
  }
}

export type CampaignActions =
GetAllCampaignsRequestAction
  | GetAllCampaignsSuccessAction
  | GetAllCampaignsFailureAction;
