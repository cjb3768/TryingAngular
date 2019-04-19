import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AbilityArray } from '../ability-array';
import { AbilityScoresService } from '../ability-scores.service';

@Component({
  selector: 'app-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrls: ['./ability-scores.component.css']
})
export class AbilityScoresComponent implements OnInit {

  ability_array: AbilityArray = {
    str: 12,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10
  };

  str = new FormControl(this.ability_array.str);
  dex = new FormControl(this.ability_array.dex);
  con = new FormControl(this.ability_array.con);
  int = new FormControl(this.ability_array.int);
  wis = new FormControl(this.ability_array.wis);
  cha = new FormControl(this.ability_array.cha);


  constructor() { }

  ngOnInit() {
  }

  calculateModifier(abilityScore: number): number{
    return Math.floor((abilityScore-10)/2);
  }

}
