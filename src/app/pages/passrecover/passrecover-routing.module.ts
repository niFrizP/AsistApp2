import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassrecoverPage } from './passrecover.page';

const routes: Routes = [
  {
    path: '',
    component: PassrecoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassrecoverPageRoutingModule {}
