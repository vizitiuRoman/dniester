import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { ServiceEffects } from '@store/service/service.effects';

import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ServicesRoutingModule,
        EffectsModule.forFeature([ServiceEffects]),
    ],
})
export class ServicesModule {}
