import { Component, OnInit } from '@angular/core';

import { ProficienciesService } from '../proficiencies.service';
import { ProficiencyList, ExpertiseList } from "../proficiency-list";

@Component({
  selector: 'app-proficiencies',
  templateUrl: './proficiencies.component.html',
  styleUrls: ['./proficiencies.component.css']
})
export class ProficienciesComponent implements OnInit {

  constructor(private proficienciesService: ProficienciesService) { }

  ngOnInit() {
  }

}
