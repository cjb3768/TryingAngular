import { FormControl } from '@angular/forms';

export class AbilityScoreArray {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

export class AbilityScoreInputs {
  str: FormControl;
  dex: FormControl;
  con: FormControl;
  int: FormControl;
  wis: FormControl;
  cha: FormControl;
}
