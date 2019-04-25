import { Component, OnInit } from '@angular/core';

import { AbilityScoresService } from '../ability-scores.service';
import { ProficienciesService } from '../proficiencies.service';
import { SkillList } from '../skill-list';

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

  constructor(private abilityScoresService: AbilityScoresService, private proficienciesService: ProficienciesService) { }

  ngOnInit() {
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
}
