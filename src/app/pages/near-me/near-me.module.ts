import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearMePageRoutingModule } from './near-me-routing.module';

import { NearMePage } from './near-me.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearMePageRoutingModule,
    ComponentModule
  ],
  declarations: [NearMePage]
})
export class NearMePageModule { }
