import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tvc-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit {

  public formGroup: FormGroup;
  public details = {
    uploadMethod: false,
    deliverMethod: null,
    date: '',
  };

  public files: any = [];

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
      uploadMethod: new FormControl(this.details.uploadMethod),
      deliverMethod: new FormControl(this.details.deliverMethod, Validators.required),
      date: new FormControl(this.details.date, [Validators.required, this.dateValidator]),
    });
  }

  get uploadMethod() { return this.formGroup.get('uploadMethod'); }
  get deliverMethod() { return this.formGroup.get('deliverMethod'); }
  get date() { return this.formGroup.get('date'); }

  dateValidator(control: FormControl): {[key: string]: any} | null {
    const date = new Date();
    const currentDate = date.getTime();
    date.setFullYear(date.getFullYear() + 1);
    const maxDate = date.getTime();
    const selectedDate = new Date(control.value).getTime();

    if (selectedDate < currentDate || selectedDate > maxDate) {
      return {dateRange: { value: control.value }};
    }
    return null;
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name);
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
  }
}
