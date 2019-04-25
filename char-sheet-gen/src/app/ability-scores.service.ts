import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AbilityScoreArray, AbilityScoreInputs } from './ability-array';

@Injectable({
  providedIn: 'root'
})
export class AbilityScoresService {

  scores: AbilityScoreArray = {
    str: 12,
    dex: 12,
    con: 12,
    int: 12,
    wis: 12,
    cha: 12
  };

  inputs: AbilityScoreInputs = {
    str: new FormControl(this.scores.str),
    dex: new FormControl(this.scores.dex),
    con: new FormControl(this.scores.con),
    int: new FormControl(this.scores.int),
    wis: new FormControl(this.scores.wis),
    cha: new FormControl(this.scores.cha)
  }

  modifiers: AbilityScoreArray = {
    str: this.calculateModifier(this.scores.str),
    dex: this.calculateModifier(this.scores.dex),
    con: this.calculateModifier(this.scores.con),
    int: this.calculateModifier(this.scores.int),
    wis: this.calculateModifier(this.scores.wis),
    cha: this.calculateModifier(this.scores.cha),
  }

  constructor() { }

  calculateModifier(abilityScore: number): number{
    return Math.floor((abilityScore-10)/2);
  }

  updateScore(adjustedScore:string, value: number){
    this.scores[adjustedScore] = value;
    this.modifiers[adjustedScore] = this.calculateModifier(value);
  }
}
