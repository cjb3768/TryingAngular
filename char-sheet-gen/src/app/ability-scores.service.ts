import { Injectable, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AbilityScoreArray } from './ability-array';

@Injectable({
  providedIn: 'root'
})
export class AbilityScoresService {

  onUpdateEvent: EventEmitter<any> = new EventEmitter(true);

  //Members
  scores: AbilityScoreArray = {
    str: 12,
    dex: 12,
    con: 12,
    int: 12,
    wis: 12,
    cha: 12
  }

  inputs = new FormGroup({
      str: new FormControl (this.scores.str),
      dex: new FormControl (this.scores.dex),
      con: new FormControl (this.scores.con),
      int: new FormControl (this.scores.int),
      wis: new FormControl (this.scores.wis),
      cha: new FormControl (this.scores.cha),
  })

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
    //update scores and modifier
    this.scores[adjustedScore] = value;
    this.modifiers[adjustedScore] = this.calculateModifier(value);
  }
}
