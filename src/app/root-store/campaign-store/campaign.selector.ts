import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {campaignAdapter, CampaignState} from './campaign.state';
import {Campaign} from './campaign.model';

export const getError = (state: CampaignState): any => state.error;

export const getIsLoading = (state: CampaignState): boolean => state.isLoading;

export const selectCampaignState: MemoizedSelector<object,
  CampaignState> = createFeatureSelector<CampaignState>('campaign');

export const selectAllCampaigns: (
  state: object
) => Campaign[] = campaignAdapter.getSelectors(selectCampaignState).selectAll;

export const selectByCampaignId = (id: number) =>
  createSelector(this.selectAllCampaigns, (allCampaigns: Campaign[]) => {
    if (allCampaigns) {
      return allCampaigns.find(p => p.id === id);
    } else {
      return null;
    }
  });

export const selectCampaignError: MemoizedSelector<object, any> = createSelector(
    selectCampaignState,
  getError
);

export const selectCampaignIsLoading: MemoizedSelector<object,
  boolean> = createSelector(selectCampaignState, getIsLoading);
