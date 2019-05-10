import { Component, Input, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AbilityScoreArray } from '../ability-array';
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
    let oldModifier = this.abilityScoresService.modifiers[adjustedScore];
    //update score
    this.abilityScoresService.updateScore(adjustedScore, control.value);
    //emit event if modifier changed
    if (oldModifier != this.abilityScoresService.modifiers[adjustedScore]){
      this.abilityScoresService.onUpdateEvent.emit(adjustedScore);
    }
  }

}
