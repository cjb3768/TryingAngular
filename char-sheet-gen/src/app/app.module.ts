import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbilityScoresComponent } from './ability-scores/ability-scores.component';
import { ProficienciesComponent } from './proficiencies/proficiencies.component';

@NgModule({
  declarations: [
    AppComponent,
    AbilityScoresComponent,
    ProficienciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
