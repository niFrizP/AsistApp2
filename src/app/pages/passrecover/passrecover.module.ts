import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassrecoverPageRoutingModule } from './passrecover-routing.module';

import { PassrecoverPage } from './passrecover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassrecoverPageRoutingModule
  ],
  declarations: [PassrecoverPage]
})
export class PassrecoverPageModule {}
