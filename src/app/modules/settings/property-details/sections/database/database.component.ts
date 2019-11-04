import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tvc-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  public formGroup: FormGroup;
  public details = {
    terms: false,
    extraInfoCheck: false,
    extraInfo: '',
  };

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      terms: new FormControl(this.details.terms, Validators.required),
      extraInfoCheck: new FormControl(this.details.extraInfoCheck),
      extraInfo: new FormControl(this.details.extraInfo, Validators.required),
    });
  }

  get terms() { return this.formGroup.get('terms'); }
  get extraInfo() { return this.formGroup.get('extraInfo'); }
  get extraInfoCheck() { return this.formGroup.get('extraInfoCheck'); }
}
