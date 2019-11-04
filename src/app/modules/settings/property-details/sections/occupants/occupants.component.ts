import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tvc-occupants',
  templateUrl: './occupants.component.html',
  styleUrls: ['./occupants.component.scss']
})
export class OccupantsComponent implements OnInit {

  public formGroup: FormGroup;
  public details = { occupants: 0 };

  public files: any = [];

  public options: number[] = [0, 5, 10, 15, 20];

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      occupants: new FormControl(this.details.occupants, Validators.required),
    });
  }

  get occupants() { return this.formGroup.get('occupants'); }
}
