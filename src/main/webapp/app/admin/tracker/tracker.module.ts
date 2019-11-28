import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeedSharedModule } from 'app/shared/shared.module';

import { JhiTrackerComponent } from './tracker.component';

import { trackerRoute } from './tracker.route';

@NgModule({
  imports: [SeedSharedModule, RouterModule.forChild([trackerRoute])],
  declarations: [JhiTrackerComponent]
})
export class TrackerModule {}
