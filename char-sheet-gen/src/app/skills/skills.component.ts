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
    acrobatics: this.calculateSkillModifier('acrobatics', 'str'),
    animalHandling: this.calculateSkillModifier('animalHandling', 'wis'),
    arcana: this.calculateSkillModifier('arcana','int'),
    athletics: this.calculateSkillModifier('athletics','str'),
    deception: 0,
    history: 0,
    insight: 0,
    intimidation: 0,
    investigation: 0,
    medicine: 0,
    nature: 0,
    perception: 0,
    performance: 0,
    persuasion: 0,
    religion: 0,
    sleightOfHand: 0,
    stealth: 0,
    survival: 0
  };

  constructor(private abilityScoresService: AbilityScoresService, private proficienciesService: ProficienciesService) { }

  ngOnInit() {
  }

  calculateSkillModifier(skillName: string, abilityName: string) : number {
    return this.abilityScoresService.modifiers[abilityName] + this.proficienciesService.calculateProficiencyBonus('skills', skillName);
  }
}
