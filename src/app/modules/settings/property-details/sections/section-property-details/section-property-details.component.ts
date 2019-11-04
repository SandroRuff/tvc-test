import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tvc-section-property-details',
  templateUrl: './section-property-details.component.html',
  styleUrls: ['./section-property-details.component.scss']
})
export class SectionPropertyDetailsComponent implements OnInit {

  public formGroup: FormGroup;
  public details = {
    address: '',
    suburb: '',
    state: '',
    postcode: '',
    type: '',
    bedrooms: null,
    commencementDate: '',
    leaseYear: 1,
    leaseMonth: 0,
    weeklyRent: null,
    monthlyRent: null,
    bond: null,
    source: ''
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
      address: new FormControl(this.details.address, Validators.required),
      suburb: new FormControl(this.details.suburb, Validators.required),
      state: new FormControl(this.details.state, Validators.required),
      postcode: new FormControl(this.details.postcode, Validators.required),
      type: new FormControl(this.details.type, Validators.required),
      bedrooms: new FormControl(this.details.bedrooms, Validators.required),
      commencementDate: new FormControl(this.details.commencementDate, Validators.required),
      leaseYear: new FormControl(this.details.leaseYear, Validators.required),
      leaseMonth: new FormControl(this.details.leaseMonth, Validators.required),
      weeklyRent: new FormControl(this.details.weeklyRent, Validators.required),
      monthlyRent: new FormControl(this.details.monthlyRent, Validators.required),
      bond: new FormControl(this.details.bond, Validators.required),
      source: new FormControl(this.details.source, Validators.required),
    });
  }

  get address() { return this.formGroup.get('address'); }
  get suburb() { return this.formGroup.get('suburb'); }
  get state() { return this.formGroup.get('state'); }
  get postcode() { return this.formGroup.get('postcode'); }
  get type() { return this.formGroup.get('type'); }
  get bedrooms() { return this.formGroup.get('bedrooms'); }
  get commencementDate() { return this.formGroup.get('commencementDate'); }
  get leaseYear() { return this.formGroup.get('leaseYear'); }
  get leaseMonth() { return this.formGroup.get('leaseMonth'); }
  get weeklyRent() { return this.formGroup.get('weeklyRent'); }
  get monthlyRent() { return this.formGroup.get('monthlyRent'); }
  get bond() { return this.formGroup.get('bond'); }
  get source() { return this.formGroup.get('source'); }
}
