import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tvc-property-inspection',
  templateUrl: './property-inspection.component.html',
  styleUrls: ['./property-inspection.component.scss']
})
export class PropertyInspectionComponent implements OnInit {

  public formGroup: FormGroup;
  public details = {
    inspect: '',
  };

  public options: string[] = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
  ];

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      inspect: new FormControl(this.details.inspect, Validators.required),
    });
  }

  get inspect() { return this.formGroup.get('inspect'); }

}
