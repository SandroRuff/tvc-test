import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tvc-section-property-manager',
  templateUrl: './section-property-manager.component.html',
  styleUrls: ['./section-property-manager.component.scss']
})
export class SectionPropertyManagerComponent implements OnInit {

  public formGroup: FormGroup;
  public details = {
    agencyName: '',
    managerName: '',
    managerEmail: '',
  };

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      agencyName: new FormControl(this.details.agencyName, Validators.required),
      managerName: new FormControl(this.details.managerName, Validators.required),
      managerEmail: new FormControl(this.details.managerEmail, Validators.required),
    });
  }

  get agencyName() { return this.formGroup.get('agencyName'); }
  get managerName() { return this.formGroup.get('managerName'); }
  get managerEmail() { return this.formGroup.get('managerEmail'); }
}
