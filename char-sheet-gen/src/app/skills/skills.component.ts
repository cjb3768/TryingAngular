import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

import { AbilityScoresService } from '../ability-scores.service';
import { ProficienciesService } from '../proficiencies.service';
import { SkillList } from '../skill-list';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  //skills
  skills: SkillList = {
    acrobatics:     {name: 'acrobatics',     printName: 'Acrobatics',      ability: 'str', modifier: this.calculateSkillModifier('acrobatics','str')},
    animalHandling: {name: 'animalHandling', printName: 'Animal Handling', ability: 'wis', modifier: this.calculateSkillModifier('animalHandling','wis')},
    arcana:         {name: 'arcana',         printName: 'Arcana',          ability: 'int', modifier: this.calculateSkillModifier('arcana','int')},
    athletics:      {name: 'athletics',      printName: 'Athletics',       ability: 'str', modifier: this.calculateSkillModifier('athletics','str')},
    deception:      {name: 'deception',      printName: 'Deception',       ability: 'cha', modifier: this.calculateSkillModifier('deception','cha')},
    history:        {name: 'history',        printName: 'History',         ability: 'int', modifier: this.calculateSkillModifier('history','int')},
    insight:        {name: 'insight',        printName: 'Insight',         ability: 'wis', modifier: this.calculateSkillModifier('insight','wis')},
    intimidation:   {name: 'intimidation',   printName: 'Intimidation',    ability: 'cha', modifier: this.calculateSkillModifier('intimidation','cha')},
    investigation:  {name: 'investigation',  printName: 'Investigation',   ability: 'int', modifier: this.calculateSkillModifier('investigation','int')},
    medicine:       {name: 'medicine',       printName: 'Medicine',        ability: 'wis', modifier: this.calculateSkillModifier('medicine','wis')},
    nature:         {name: 'nature',         printName: 'Nature',          ability: 'int', modifier: this.calculateSkillModifier('nature','int')},
    perception:     {name: 'perception',     printName: 'Perception',      ability: 'wis', modifier: this.calculateSkillModifier('perception','wis')},
    performance:    {name: 'performance',    printName: 'Performance',     ability: 'cha', modifier: this.calculateSkillModifier('performance','cha')},
    persuasion:     {name: 'persuasion',     printName: 'Persuasion',      ability: 'cha', modifier: this.calculateSkillModifier('persuasion','cha')},
    religion:       {name: 'religion',       printName: 'Religion',        ability: 'int', modifier: this.calculateSkillModifier('religion','int')},
    sleightOfHand:  {name: 'sleightOfHand',  printName: 'Sleight of Hand', ability: 'dex', modifier: this.calculateSkillModifier('sleightOfHand','dex')},
    stealth:        {name: 'stealth',        printName: 'Stealth',         ability: 'dex', modifier: this.calculateSkillModifier('stealth','dex')},
    survival:       {name: 'survival',       printName: 'Survival',        ability: 'wis', modifier: this.calculateSkillModifier('survival','wis')}
  };

  //form controls
  proficiencyControls = new FormGroup({
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
  });

  expertiseControls = new FormGroup({
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
  });

  constructor(private abilityScoresService: AbilityScoresService, private proficienciesService: ProficienciesService) {
    //abilityScoresService subscriptions
    abilityScoresService.onUpdateEvent.subscribe(
      (adjustedScore) => {
        console.log(`Modifier for "${adjustedScore}" changed. Updating relevant skills.`);
        this.updateSkillModifiers(adjustedScore);
      }
    );

    //proficienciesService subscriptions
    proficienciesService.addProficiencyEvent.subscribe(
      (proficiencyContext) => {
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
      }
    );

    proficienciesService.addExpertiseEvent.subscribe(
      (expertiseContext) => {
        if (expertiseContext.type == "skills"){
          //verify that the skill in question exists
          if (this.skills[expertiseContext.name]){
            console.log(`Updating interface to match added expertise for "${expertiseContext.name}"`);
            //set value of matching expertise checkbox
            this.expertiseControls.controls[expertiseContext.name].setValue(true);
            //update modifier
            this.skills[expertiseContext.name].modifier = this.calculateSkillModifier(expertiseContext.name, this.skills[expertiseContext.name].ability);
          }
        }
      }
    );

    proficienciesService.removeProficiencyEvent.subscribe(
      (proficiencyContext) => {
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
      }
    );

    proficienciesService.removeExpertiseEvent.subscribe(
      (expertiseContext) => {
        if (expertiseContext.type == "skills"){
          //verify that the skill in question exists
          if (this.skills[expertiseContext.name]){
            console.log(`Updating interface to match removed expertise for "${expertiseContext.name}"`);
            //set value of matching expertise checkbox
            this.expertiseControls.controls[expertiseContext.name].setValue(false);
            //update modifier
            this.skills[expertiseContext.name].modifier = this.calculateSkillModifier(expertiseContext.name, this.skills[expertiseContext.name].ability);
          }
        }
      }
    );
  }

  ngOnInit() {
    //disable all expertise controls where the character lacks proficiency
    for (let s in this.skills){
      if (!this.proficienciesService.hasProficiency('skills', s)){
        this.expertiseControls.controls[s].disable();
      }
    }
  }

  calculateSkillModifier(skillName: string, abilityName: string) : number {
    return this.abilityScoresService.abilities[abilityName].modifier + this.proficienciesService.calculateProficiencyBonus('skills', skillName);
  }

  updateSkillModifiers(changedAbilityScore: string){
    //update all of the ability modifiers whose matching ability score has changed
    for (let s in this.skills){
      if (this.skills[s].ability == changedAbilityScore){
        this.skills[s].modifier = this.calculateSkillModifier(this.skills[s].name, this.skills[s].ability);
      }
    }
  }

  updateProficiency(proficiencyControl: AbstractControl, skillName: string){
    if (proficiencyControl.value){
      //add proficiency
      console.log(this.proficienciesService.addProficiency('skills', skillName));
    }
    else{
      //remove proficiency (and expertise, if relevant)
      console.log(this.proficienciesService.removeProficiency('skills', skillName));
    }
  }

  updateExpertise(expertiseControl: AbstractControl, skillName: string){
    //handle change in expertise
    if (expertiseControl.value == true){
      //add expertise
      console.log(this.proficienciesService.addExpertise('skills', skillName));

    }
    else{
      //remove expertise
      console.log(this.proficienciesService.removeExpertise('skills', skillName));
    }
  }

  setProficiency(proficiencyName: string){
    this.updateProficiency(this.proficiencyControls.controls[proficiencyName],
                          proficiencyName);
  }

  setExpertise(expertiseName: string){
    this.updateExpertise(this.expertiseControls.controls[expertiseName],
                        expertiseName)
  }
}
