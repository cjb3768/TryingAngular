import { Injectable } from '@angular/core';

import { AbilityScoreArray } from './ability-array';

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

  constructor() { }

  calculateModifier(abilityScore: number): number{
    return Math.floor((abilityScore-10)/2);
  }
}
