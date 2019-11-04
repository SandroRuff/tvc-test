import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tvc-utility-connection',
  templateUrl: './utility-connection.component.html',
  styleUrls: ['./utility-connection.component.scss']
})
export class UtilityConnectionComponent implements OnInit {

  public formGroup: FormGroup;
  public details = {
    call: false,
    terms: false,
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
      call: new FormControl(this.details.call),
      terms: new FormControl(this.details.terms, Validators.required),
    });
  }

  get call() { return this.formGroup.get('call'); }
  get terms() { return this.formGroup.get('terms'); }
}
