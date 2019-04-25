import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AbilityScoreArray, AbilityScoreInputs } from '../ability-array';
import { AbilityScoresService } from '../ability-scores.service';

@Component({
  selector: 'app-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrls: ['./ability-scores.component.css']
})
export class AbilityScoresComponent implements OnInit {

  constructor(private abilityScoresService: AbilityScoresService) { }

  ngOnInit() {
  }

  updateScore(adjustedScore:string, control: FormControl) {
    this.abilityScoresService.updateScore(adjustedScore, control.value);
  }

}
