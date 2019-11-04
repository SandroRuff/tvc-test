import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tvc-step-section',
  templateUrl: './step-section.component.html',
  styleUrls: ['./step-section.component.scss']
})
export class StepSectionComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit() { }
}
