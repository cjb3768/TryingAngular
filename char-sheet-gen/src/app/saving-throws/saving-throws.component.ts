import { Component, OnInit } from '@angular/core';

import { AbilityScoresService } from '../ability-scores.service';
import { ProficienciesService } from '../proficiencies.service';

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.css']
})
export class SavingThrowsComponent implements OnInit {

  constructor(private abilityScoresService: AbilityScoresService, private proficienciesService: ProficienciesService) {
    //abilityScoresService subscriptions
    abilityScoresService.onUpdateEvent.subscribe(
      (adjustedScore) => {
        //console.log(`Modifier for "${adjustedScore}" changed. Updating relevant skills.`);
        //this.updateSkillModifiers(adjustedScore);
      }
    );

    //proficienciesService subscriptions
    proficienciesService.addProficiencyEvent.subscribe(
      (proficiencyContext) => {
        /*
        if (proficiencyContext.type == "skills"){
          //verify that the skill in question exists
          if (this.skills[proficiencyContext.name]){
            console.log(`Updating interface to match added proficiency for "${proficiencyContext.name}"`);
            //set value of matching proficiency checkbox
            this.proficiencyControls.controls[proficiencyContext.name].setValue(true);
            //enable matching expertise checkbox
            this.expertiseControls.controls[proficiencyContext.name].enable();
            //update modifier
            this.skills[proficiencyContext.name].modifier = this.calculateSkillModifier(proficiencyContext.name, this.skills[proficiencyContext.name].ability);
          }
        }
        else{
          console.log(`Encountered unexpected proficiency type "${proficiencyContext.type}"`);
        }
        */
      }
    );

    proficienciesService.removeProficiencyEvent.subscribe(
      (proficiencyContext) => {
        /*
        if (proficiencyContext.type == "skills"){
          //verify that the skill in question exists
          if (this.skills[proficiencyContext.name]){
            console.log(`Updating interface to match removed proficiency for "${proficiencyContext.name}"`);
            //set value of matching proficiency checkbox
            this.proficiencyControls.controls[proficiencyContext.name].setValue(false);
            //disable matching expertise checkbox
            this.expertiseControls.controls[proficiencyContext.name].disable();
            //update modifier
            this.skills[proficiencyContext.name].modifier = this.calculateSkillModifier(proficiencyContext.name, this.skills[proficiencyContext.name].ability);

          }
        }
        else{
          console.log(`Encountered unexpected proficiency type "${proficiencyContext.type}"`);
        }
        */
      }
    );
  }

  ngOnInit() {
  }

}
