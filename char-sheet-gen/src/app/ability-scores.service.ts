import { Injectable, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AbilityProperties, AbilityScoreArray } from './ability-array';

@Injectable({
  providedIn: 'root'
})
export class AbilityScoresService {

  onUpdateEvent: EventEmitter<any> = new EventEmitter(true);

  private defStat = 12;

  //Members
  abilities: AbilityScoreArray = {
    str: {name: 'str', printName: "Strength",     score: this.defStat, modifier: this.calculateModifier(this.defStat)},
    dex: {name: 'dex', printName: "Dexterity",    score: this.defStat, modifier: this.calculateModifier(this.defStat)},
    con: {name: 'con', printName: "Constitution", score: this.defStat, modifier: this.calculateModifier(this.defStat)},
    int: {name: 'int', printName: "Intelligence", score: this.defStat, modifier: this.calculateModifier(this.defStat)},
    wis: {name: 'wis', printName: "Wisdom",       score: this.defStat, modifier: this.calculateModifier(this.defStat)},
    cha: {name: 'cha', printName: "Charisma",     score: this.defStat, modifier: this.calculateModifier(this.defStat)}
  };

  inputs = new FormGroup({
      str: new FormControl (this.abilities.str.score),
      dex: new FormControl (this.abilities.dex.score),
      con: new FormControl (this.abilities.con.score),
      int: new FormControl (this.abilities.int.score),
      wis: new FormControl (this.abilities.wis.score),
      cha: new FormControl (this.abilities.cha.score),
  })
/*
  modifiers: AbilityScoreArray = {
    str: this.calculateModifier(this.scores.str),
    dex: this.calculateModifier(this.scores.dex),
    con: this.calculateModifier(this.scores.con),
    int: this.calculateModifier(this.scores.int),
    wis: this.calculateModifier(this.scores.wis),
    cha: this.calculateModifier(this.scores.cha),
  }
*/
  constructor() { }

  calculateModifier(abilityScore: number): number{
    return Math.floor((abilityScore-10)/2);
  }

  updateScore(adjustedScore:string, value: number){
    //update scores and modifier
    this.abilities[adjustedScore].score = value;
    this.abilities[adjustedScore].modifier = this.calculateModifier(value);
  }
}
