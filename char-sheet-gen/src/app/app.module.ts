import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbilityScoresComponent } from './ability-scores/ability-scores.component';
import { ProficienciesComponent } from './proficiencies/proficiencies.component';
import { SkillsComponent } from './skills/skills.component';
import { SavingThrowsComponent } from './saving-throws/saving-throws.component';

@NgModule({
  declarations: [
    AppComponent,
    AbilityScoresComponent,
    ProficienciesComponent,
    SkillsComponent,
    SavingThrowsComponent
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
