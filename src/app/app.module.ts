import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurgoalsComponent } from './ourgoals/ourgoals.component';
import { ThesolutionComponent } from './thesolution/thesolution.component';
import { ThepartsComponent } from './theparts/theparts.component';
import { ModulesComponent } from './modules/modules.component';
import { Modules2Component } from './modules2/modules2.component';
import { SummaryComponent } from './summary/summary.component';
import { InsightEventsComponent } from './insight-events/insight-events.component';
import { InsightsComponent } from './insights/insights.component';
import { OldHomeComponent } from './old-home/old-home.component';
import { PresentationWhyComponent } from './presentation-why/presentation-why.component';
import { TeamsComponent } from './teams/teams.component';
import { Thesolution2Component } from './thesolution2/thesolution2.component';
import { InsightsmodulesComponent } from './insightsmodules/insightsmodules.component';
import { Modules3Component } from './modules3/modules3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurgoalsComponent,
    ThesolutionComponent,
    ThepartsComponent,
    ModulesComponent,
    Modules2Component,
    SummaryComponent,
    InsightEventsComponent,
    InsightsComponent,
    OldHomeComponent,
    PresentationWhyComponent,
    TeamsComponent,
    Thesolution2Component,
    InsightsmodulesComponent,
    Modules3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
