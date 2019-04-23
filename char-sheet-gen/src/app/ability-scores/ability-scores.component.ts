import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AbilityScoreArray } from '../ability-array';
import { AbilityScoresService } from '../ability-scores.service';

@Component({
  selector: 'app-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrls: ['./ability-scores.component.css']
})
export class AbilityScoresComponent implements OnInit {

  str = new FormControl(this.abilityScoresService.scores.str);
  dex = new FormControl(this.abilityScoresService.scores.dex);
  con = new FormControl(this.abilityScoresService.scores.con);
  int = new FormControl(this.abilityScoresService.scores.int);
  wis = new FormControl(this.abilityScoresService.scores.wis);
  cha = new FormControl(this.abilityScoresService.scores.cha);


  constructor(private abilityScoresService: AbilityScoresService) { }

  ngOnInit() {
  }

  updateModifier(adjustedScore:string, control: FormControl) {
    this.abilityScoresService.updateScore(adjustedScore, control.value);
  }

}
