import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tvc-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  public formGroup: FormGroup;
  public details = { terms: 0 };

  public files: any = [];

  public options: number[] = [0, 5, 10, 15, 20];

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      terms: new FormControl(this.details.terms, Validators.required),
    });
  }

  get terms() { return this.formGroup.get('terms'); }
}
