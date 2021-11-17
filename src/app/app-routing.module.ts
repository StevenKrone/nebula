import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InsightEventsComponent } from './insight-events/insight-events.component';
import { InsightsComponent } from './insights/insights.component';
import { InsightsmodulesComponent } from './insightsmodules/insightsmodules.component';
import { ModulesComponent } from './modules/modules.component';
import { Modules2Component } from './modules2/modules2.component';
import { OldHomeComponent } from './old-home/old-home.component';
import { OurgoalsComponent } from './ourgoals/ourgoals.component';
import { PresentationWhyComponent } from './presentation-why/presentation-why.component';
import { SummaryComponent } from './summary/summary.component';
import { TeamsComponent } from './teams/teams.component';
import { ThepartsComponent } from './theparts/theparts.component';
import { ThesolutionComponent } from './thesolution/thesolution.component';
import { Thesolution2Component } from './thesolution2/thesolution2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'our-goals', component: OurgoalsComponent },
  { path: 'the-solution', component: ThesolutionComponent },
  { path: 'the-solution2', component: Thesolution2Component },
  { path: 'the-parts', component: ThepartsComponent },
  { path: 'modules', component: ModulesComponent },
  { path: 'modules2', component: Modules2Component },
  { path: 'summary', component: SummaryComponent },
  { path: 'insight-events', component: InsightEventsComponent },
  { path: 'insight-modules', component: InsightsmodulesComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'old-home', component: OldHomeComponent },
  { path: 'presentation-2-why', component: PresentationWhyComponent },
  { path: 'teams', component: TeamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
