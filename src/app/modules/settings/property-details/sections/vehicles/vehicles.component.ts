import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tvc-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  public formGroup: FormGroup;
  public details = { vehicles: 0 };

  public files: any = [];

  public options: number[] = [0, 5, 10, 15, 20];

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      vehicles: new FormControl(this.details.vehicles, Validators.required),
    });
  }

  get vehicles() { return this.formGroup.get('vehicles'); }

}
