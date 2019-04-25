import { Injectable } from '@angular/core';

import { ProficiencyList, ExpertiseList } from "./proficiency-list";

@Injectable({
  providedIn: 'root'
})
export class ProficienciesService {

  proficiencies: ProficiencyList = {
    savingThrows: ['wis','dex'],
    skills: ['perception','stealth','history','arcana','athletics'],
    weapons: ['simple'],
    armor: ['light'],
    tools: ['thieves\' tools','lute','disguise kit','gambling kit'],
    languages: ['common','elven']
  };

  expertises: ExpertiseList = {
    skills: ['stealth','perception','athletics'],
    tools: ['thieves\' tools','disguise kit']
  };

  baseProficiency = 2;

  constructor() { }

  hasProficiency(proficiencyType: string, proficiencyName: string): boolean{
    return (this.proficiencies.hasOwnProperty(proficiencyType) && this.proficiencies[proficiencyType].includes(proficiencyName));
  }

  hasExpertise(expertiseType: string, expertiseName: string): boolean{
    return (this.expertises.hasOwnProperty(expertiseType) && this.expertises[expertiseType].includes(expertiseName));
  }

  addProficiency(proficiencyType: string, proficiencyName: string): string{
    //verify that the proficiency we want to add is valid
    if (this.proficiencies.hasOwnProperty(proficiencyType)){
      //verify that the character does not already have that proficiency
      if (!this.proficiencies[proficiencyType].includes(proficiencyName)){
        this.proficiencies[proficiencyType].push(proficiencyName);
        return `Proficiency "${proficiencyName}" added`;
      }
      else{
        //no need to add the proficiency; it's already there
        return `Error: Proficiency "${proficiencyName}" already exists`;
      }
    }
    else{
      //invalid proficiency type
      return `Error: Invalid proficiency type`;
    }
  }

  addExpertise(expertiseType: string, expertiseName: string): string{
    //verify that the expertise type is valid (skills or tools)
    if (this.expertises.hasOwnProperty(expertiseType)){
      //verify that the character already has proficiency in the expertise type
      if (this.proficiencies[expertiseType].includes(expertiseName)){
        //verify the character doesn't already have expertise in the skill
        if (!this.expertises[expertiseType].includes(expertiseName)){
          this.expertises[expertiseType].push(expertiseName);
          return `Expertise "${expertiseName}" added`;
        }
        else{
          //character already has expertise with the appropriate skill or tool
          return `Error: Expertise "${expertiseName}" already exists`;
        }
      }
      else{
        //character doesn't have proficiency in the appropriate skill or tool
        return `Error: Lacking proficiency in "${expertiseName}"`;
      }
    }
    else{
      //invalid expertise type
      return `Error: Invalid expertise type`;
    }
  }

  calculateProficiencyBonus(proficiencyType:string, proficiencyName: string): number{
    if (this.hasProficiency(proficiencyType, proficiencyName)){
      if (this.hasExpertise(proficiencyType, proficiencyName)){
        return this.baseProficiency * 2;
      }
      else{
        return this.baseProficiency;
      }
    }
    return 0;
  }

}
