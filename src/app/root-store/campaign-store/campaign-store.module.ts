import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CampaignEffects } from './campaign.effects';
import { campaignReducer } from './campaign.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('campaign', campaignReducer),
    EffectsModule.forFeature([CampaignEffects])
  ]
})
export class CampaignStoreModule { }
