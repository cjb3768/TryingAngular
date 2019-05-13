import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

import { AbilityScoresService } from '../ability-scores.service';
import { ProficienciesService } from '../proficiencies.service';

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.css']
})
export class SavingThrowsComponent implements OnInit {

  savingThrows = {
    str: this.calculateSavingThrow("str"),
    dex: this.calculateSavingThrow("dex"),
    con: this.calculateSavingThrow("con"),
    int: this.calculateSavingThrow("int"),
    wis: this.calculateSavingThrow("wis"),
    cha: this.calculateSavingThrow("cha")
  }

  //form controls
  savingThrowProficiencyControls = new FormGroup ({
    str: new FormControl(this.proficienciesService.hasProficiency("savingThrows", "str")),
    dex: new FormControl(this.proficienciesService.hasProficiency("savingThrows", "dex")),
    con: new FormControl(this.proficienciesService.hasProficiency("savingThrows", "con")),
    int: new FormControl(this.proficienciesService.hasProficiency("savingThrows", "int")),
    wis: new FormControl(this.proficienciesService.hasProficiency("savingThrows", "wis")),
    cha: new FormControl(this.proficienciesService.hasProficiency("savingThrows", "cha"))
  });

  constructor(private abilityScoresService: AbilityScoresService, private proficienciesService: ProficienciesService) {
    //abilityScoresService subscriptions
    abilityScoresService.onUpdateEvent.subscribe(
      (adjustedScore) => {
        console.log(`Modifier for "${adjustedScore}" changed. Updating saving throw.`);
        this.updateSavingThrow(adjustedScore);
      }
    );

    //proficienciesService subscriptions
    proficienciesService.addProficiencyEvent.subscribe(
      (proficiencyContext) => {
        console.log(`Proficiency for "${proficiencyContext.name}" of type "${proficiencyContext.type}" added. Updating saving throw value.`);
        this.updateSavingThrow(proficiencyContext.name);
      }
    );

    proficienciesService.removeProficiencyEvent.subscribe(
      (proficiencyContext) => {
        console.log(`Proficiency for "${proficiencyContext.name}" of type "${proficiencyContext.type}" removed. Updating saving throw value.`);
        this.updateSavingThrow(proficiencyContext.name);
      }
    );
  }

  ngOnInit() {
  }

  calculateSavingThrow(abilityName: string) : number {
    return this.abilityScoresService.abilities[abilityName].modifier + this.proficienciesService.calculateProficiencyBonus("savingThrows", abilityName);
  }

  updateSavingThrow(abilityName: string){
    this.savingThrows[abilityName] = this.calculateSavingThrow(abilityName);
  }

  updateSavingThrowProficiency(abilityName: string){
    if (this.savingThrowProficiencyControls.controls[abilityName].value){
      this.proficienciesService.addProficiency("savingThrows", abilityName);
    }
    else{
      this.proficienciesService.removeProficiency("savingThrows", abilityName);
    }
  }
}
