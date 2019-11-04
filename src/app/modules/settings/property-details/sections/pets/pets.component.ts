import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tvc-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  public formGroup: FormGroup;
  public details = { pets: 0 };

  public files: any = [];

  public options: number[] = [0, 5, 10, 15, 20];

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      pets: new FormControl(this.details.pets, Validators.required),
    });
  }

  get pets() { return this.formGroup.get('pets'); }
}
