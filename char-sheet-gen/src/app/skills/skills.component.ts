import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AbilityScoresService } from '../ability-scores.service';
import { ProficienciesService } from '../proficiencies.service';
import { SkillList } from '../skill-list';
import { SkillControlList } from '../skill-control-list';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: SkillList = {
    acrobatics:     {name: 'acrobatics', printName: 'Acrobatics', ability: 'str', modifier: this.calculateSkillModifier('acrobatics','str')},
    animalHandling: {name: 'animalHandling', printName: 'Animal Handling', ability: 'wis', modifier: this.calculateSkillModifier('animalHandling', 'wis')},
    arcana:         {name: 'arcana', printName: 'Arcana', ability: 'int', modifier: this.calculateSkillModifier('arcana','int')},
    athletics:      {name: 'athletics', printName: 'Athletics', ability: 'str', modifier: this.calculateSkillModifier('athletics','str')},
    deception:      {name: 'deception', printName: 'Deception', ability: 'cha', modifier: this.calculateSkillModifier('deception','cha')},
    history:        {name: 'history', printName: 'History', ability: 'int', modifier: this.calculateSkillModifier('history','int')},
    insight:        {name: 'insight', printName: 'Insight', ability: 'wis', modifier: this.calculateSkillModifier('insight','wis')},
    intimidation:   {name: 'intimidation', printName: 'Intimidation', ability: 'cha', modifier: this.calculateSkillModifier('intimidation','cha')},
    investigation:  {name: 'investigation', printName: 'Investigation', ability: 'int', modifier: this.calculateSkillModifier('investigation','int')},
    medicine:       {name: 'medicine', printName: 'Medicine', ability: 'wis', modifier: this.calculateSkillModifier('medicine','wis')},
    nature:         {name: 'nature', printName: 'Nature', ability: 'int', modifier: this.calculateSkillModifier('nature','int')},
    perception:     {name: 'perception', printName: 'Perception', ability: 'wis', modifier: this.calculateSkillModifier('perception','wis')},
    performance:    {name: 'performance', printName: 'Performance', ability: 'cha', modifier: this.calculateSkillModifier('performance','cha')},
    persuasion:     {name: 'persuasion', printName: 'Persuasion', ability: 'cha', modifier: this.calculateSkillModifier('persuasion','cha')},
    religion:       {name: 'religion', printName: 'Religion', ability: 'int', modifier: this.calculateSkillModifier('religion','int')},
    sleightOfHand:  {name: 'sleightOfHand', printName: 'Sleight of Hand', ability: 'dex', modifier: this.calculateSkillModifier('sleightOfHand','dex')},
    stealth:        {name: 'stealth', printName: 'Stealth', ability: 'dex', modifier: this.calculateSkillModifier('stealth','dex')},
    survival:       {name: 'survival', printName: 'Survival', ability: 'wis', modifier: this.calculateSkillModifier('survival','wis')}
  };

  //form controls
  proficiencyControls: SkillControlList = {
    acrobatics:     new FormControl(this.proficienciesService.hasProficiency('skills','acrobatics')),
    animalHandling: new FormControl(this.proficienciesService.hasProficiency('skills','animalHandling')),
    arcana:         new FormControl(this.proficienciesService.hasProficiency('skills','arcana')),
    athletics:      new FormControl(this.proficienciesService.hasProficiency('skills','athletics')),
    deception:      new FormControl(this.proficienciesService.hasProficiency('skills','deception')),
    history:        new FormControl(this.proficienciesService.hasProficiency('skills','history')),
    insight:        new FormControl(this.proficienciesService.hasProficiency('skills','insight')),
    intimidation:   new FormControl(this.proficienciesService.hasProficiency('skills','intimidation')),
    investigation:  new FormControl(this.proficienciesService.hasProficiency('skills','investigation')),
    medicine:       new FormControl(this.proficienciesService.hasProficiency('skills','medicine')),
    nature:         new FormControl(this.proficienciesService.hasProficiency('skills','nature')),
    perception:     new FormControl(this.proficienciesService.hasProficiency('skills','perception')),
    performance:    new FormControl(this.proficienciesService.hasProficiency('skills','performance')),
    persuasion:     new FormControl(this.proficienciesService.hasProficiency('skills','persuasion')),
    religion:       new FormControl(this.proficienciesService.hasProficiency('skills','religion')),
    sleightOfHand:  new FormControl(this.proficienciesService.hasProficiency('skills','sleightOfHand')),
    stealth:        new FormControl(this.proficienciesService.hasProficiency('skills','stealth')),
    survival:       new FormControl(this.proficienciesService.hasProficiency('skills','survival'))
  }

  expertiseControls: SkillControlList = {
    acrobatics:     new FormControl(this.proficienciesService.hasExpertise('skills','acrobatics')),
    animalHandling: new FormControl(this.proficienciesService.hasExpertise('skills','animalHandling')),
    arcana:         new FormControl(this.proficienciesService.hasExpertise('skills','arcana')),
    athletics:      new FormControl(this.proficienciesService.hasExpertise('skills','athletics')),
    deception:      new FormControl(this.proficienciesService.hasExpertise('skills','deception')),
    history:        new FormControl(this.proficienciesService.hasExpertise('skills','history')),
    insight:        new FormControl(this.proficienciesService.hasExpertise('skills','insight')),
    intimidation:   new FormControl(this.proficienciesService.hasExpertise('skills','intimidation')),
    investigation:  new FormControl(this.proficienciesService.hasExpertise('skills','investigation')),
    medicine:       new FormControl(this.proficienciesService.hasExpertise('skills','medicine')),
    nature:         new FormControl(this.proficienciesService.hasExpertise('skills','nature')),
    perception:     new FormControl(this.proficienciesService.hasExpertise('skills','perception')),
    performance:    new FormControl(this.proficienciesService.hasExpertise('skills','performance')),
    persuasion:     new FormControl(this.proficienciesService.hasExpertise('skills','persuasion')),
    religion:       new FormControl(this.proficienciesService.hasExpertise('skills','religion')),
    sleightOfHand:  new FormControl(this.proficienciesService.hasExpertise('skills','sleightOfHand')),
    stealth:        new FormControl(this.proficienciesService.hasExpertise('skills','stealth')),
    survival:       new FormControl(this.proficienciesService.hasExpertise('skills','survival'))
  }

  constructor(private abilityScoresService: AbilityScoresService, private proficienciesService: ProficienciesService) { }

  ngOnInit() {
    /*
    for (let controlName in this.proficiencyControls){
      this.proficiencyControls[controlName].registerOnChange(this.proficiencyChange(this.proficiencyControls[controlName]));
    }
    */
  }

  calculateSkillModifier(skillName: string, abilityName: string) : number {
    return this.abilityScoresService.modifiers[abilityName] + this.proficienciesService.calculateProficiencyBonus('skills', skillName);
  }

  updateSkillModifiers(changedAbilityScore: string){
    //update all of the ability modifiers whose matching ability score has changed
    for (let s in this.skills){
      if (this.skills[s].ability == changedAbilityScore){
        this.skills[s].modifier = this.calculateSkillModifier(this.skills[s].name, this.skills[s].ability);
      }
    }
  }

  proficiencyChange(proficiencyControl: FormControl, expertiseControl: FormControl, skillName: string){
    if (proficiencyControl.value == true){
      console.log('Unchecking - should remove proficiency and expertise');
      //remove proficiency

      //remove expertise

      //uncheck expertiseControl
      expertiseControl.setValue(false);
    }
    else{
      console.log('Checking - should add proficiency');
      //add proficiency
      console.log(this.proficienciesService.addProficiency('skills',skillName));
    }
  }

  expertiseChange(proficiencyControl: FormControl, expertiseControl: FormControl, skillName: string){
    if (expertiseControl.value == true){
      console.log('Unchecking - should remove expertise');
      //remove expertise

    }
    else{
      console.log('Checking - should add expertise if proficient');
      //add expertise
      //TODO: fix this to uncheck box if we can't add the proficiency
      console.log(this.proficienciesService.addExpertise('skills',skillName));
    }
  }
}
