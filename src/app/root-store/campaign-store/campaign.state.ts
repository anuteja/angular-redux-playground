import {Campaign} from './campaign.model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export const campaignAdapter: EntityAdapter<Campaign> = createEntityAdapter<Campaign>({
  selectId: model => model.id
});

export interface CampaignState extends EntityState<Campaign> {
  isLoading: boolean;
  error: string;
}

export const initialState: CampaignState = campaignAdapter.getInitialState({
  isLoading: false,
  error: null
});

