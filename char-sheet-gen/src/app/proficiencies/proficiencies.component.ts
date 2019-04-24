import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ProficienciesService } from '../proficiencies.service';
import { ProficiencyList, ExpertiseList } from "../proficiency-list";

@Component({
  selector: 'app-proficiencies',
  templateUrl: './proficiencies.component.html',
  styleUrls: ['./proficiencies.component.css']
})
export class ProficienciesComponent implements OnInit {

  proficiencyType = new FormControl(Object.keys(this.proficienciesService.proficiencies)[0]);
  proficiencyName = new FormControl();
  expertiseType = new FormControl(Object.keys(this.proficienciesService.expertises)[0]);
  expertiseName = new FormControl();

  constructor(private proficienciesService: ProficienciesService) { }

  ngOnInit() {
  }

  addProficiency(){
    //check to make sure user has input a name for the proficiency
    if (this.proficiencyName.value){
      //attempt to add new proficiency
      console.log(this.proficienciesService.addProficiency(this.proficiencyType.value, this.proficiencyName.value));
    }
    else{
      console.log("Error: No proficiency name specified");
    }
  }

  addExpertise(){
    //check to make sure user has input a name for the expertise
    if (this.expertiseName.value){
      console.log(this.proficienciesService.addExpertise(this.expertiseType.value, this.expertiseName.value));
    }
    else{
      console.log("Error: No expertise name specified");
    }
  }
}
