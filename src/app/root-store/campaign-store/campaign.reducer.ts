import {CampaignActions, CampaignActionTypes} from './campaign.actions';
import {initialState, campaignAdapter, CampaignState} from './campaign.state';

export function campaignReducer(state = initialState, action: CampaignActions): CampaignState {
  switch (action.type) {
    case CampaignActionTypes.GET_ALL_CAMPAIGNS_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case CampaignActionTypes.GET_ALL_CAMPAIGNS_SUCCESS:
      return campaignAdapter.addAll(action.payload.campaigns, {
        ...state,
        error: null,
        isLoading: false
      });
    case CampaignActionTypes.GET_ALL_CAMPAIGNS_FAILURE:
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
