import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tvc-furter-questions',
  templateUrl: './furter-questions.component.html',
  styleUrls: ['./furter-questions.component.scss']
})
export class FurterQuestionsComponent implements OnInit {

  public formGroup: FormGroup;
  public details = {
    intendOnBuying: '',
    tenancy: false,
    refuse: false,
    debt: false,
    deductions: false,
    reason: false,
    applications: false,
    currently: false,
    buying: false,
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
      intendOnBuying: new FormControl(this.details.intendOnBuying, Validators.required),
      tenancy: new FormControl(this.details.tenancy),
      refuse: new FormControl(this.details.refuse),
      debt: new FormControl(this.details.debt),
      deductions: new FormControl(this.details.deductions),
      reason: new FormControl(this.details.reason),
      applications: new FormControl(this.details.applications),
      currently: new FormControl(this.details.currently),
      buying: new FormControl(this.details.buying),
    });
  }

  get intendOnBuying() { return this.formGroup.get('intendOnBuying'); }
  get tenancy() { return this.formGroup.get('tenancy'); }
  get refuse() { return this.formGroup.get('refuse'); }
  get debt() { return this.formGroup.get('debt'); }
  get deductions() { return this.formGroup.get('deductions'); }
  get reason() { return this.formGroup.get('reason'); }
  get applications() { return this.formGroup.get('applications'); }
  get currently() { return this.formGroup.get('currently'); }
  get buying() { return this.formGroup.get('buying'); }
}
