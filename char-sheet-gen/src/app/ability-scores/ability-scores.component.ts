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
    let oldModifier = this.abilityScoresService.abilities[adjustedScore].modifier;
    //update score
    this.abilityScoresService.updateScore(adjustedScore, control.value);
    //emit event if modifier changed
    if (oldModifier != this.abilityScoresService.abilities[adjustedScore].modifier){
      this.abilityScoresService.onUpdateEvent.emit(adjustedScore);
    }
  }

}
