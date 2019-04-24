import { Injectable } from '@angular/core';

import { ProficiencyList, ExpertiseList } from "./proficiency-list";

@Injectable({
  providedIn: 'root'
})
export class ProficienciesService {

  proficiencies: ProficiencyList = {};

  expertises: ExpertiseList = {};

  constructor() { }

  addProficiency(proficiencyType: string, proficiencyName: string){
    //verify that the proficiency we want to add is valid
    if (this.proficiencies.hasOwnProperty(proficiencyType)){
      //verify that the character does not already have that proficiency
      if (!this.proficiencies[proficiencyType].indexOf(proficiencyName)){
        this.proficiencies[proficiencyType].push(proficiencyName);
      }
      else{
        //no need to add the proficiency; it's already there
      }
    }
    else{
      //invalid proficiency type
    }
  }

  addExpertise(expertiseType: string, expertiseName: string){
    //verify that the expertise type is valid (skills or tools)
    if (this.expertises.hasOwnProperty(expertiseType)){
      //verify that the character already has proficiency in the expertise type
      if (this.proficiencies[expertiseType].indexOf(expertiseName)){
        //verify the character doesn't already have expertise in the skill
        if (!this.expertises[expertiseType.indexOf(expertiseName)]){
          this.expertises[expertiseType].push(expertiseName);
        }
        else{
          //character already has expertise with the appropriate skill or tool
        }
      }
      else{
        //character doesn't have proficiency in the appropriate skill or tool
      }
    }
    else{
      //invalid expertise type
    }
  }

  
}
