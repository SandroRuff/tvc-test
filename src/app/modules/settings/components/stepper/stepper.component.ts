import { AfterViewInit, Component, ContentChildren, QueryList } from '@angular/core';
import { StepDirective } from './step/step.directive';

@Component({
  selector: 'tvc-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements AfterViewInit {

  @ContentChildren(StepDirective, {descendants: true}) child: QueryList<StepDirective>;

  constructor() {}

  private _step = 0;

  get step(): number {
    return this._step;
  }

  set step(value: number) {
    if (!this._canGoToStep(this._step, value)) {
      return;
    }

    const prevStep = this.steps[this._step];
    if (prevStep) {
      prevStep.hide();
    }

    this._step = value;

    const nextStep = this.steps[this._step];
    if (nextStep) {
      nextStep.show();
    }
  }

  get steps(): StepDirective[] {
    return this.child ? this.child.toArray() : [];
  }

  get stepsCount(): number {
    return this.steps.length;
  }

  get nextTitle(): string {
    return this.steps[this._step + 1].label;
  }

  ngAfterViewInit() {
    const nextStep = this.steps[this.step];
    if (nextStep) {
      nextStep.show();
    }
  }

  next(): void {
    if (this.hasNext()) {
      this.step++;
    }
  }

  previous(): void {
    if (this.hasPrevious()) {
      this.step--;
    }
  }

  hasNext(): boolean {
    return this.step < this.stepsCount - 1;
  }

  canGoNext(): boolean {
    return this._canGoToStep(this._step, this._step + 1);
  }

  hasPrevious(): boolean {
    return this.step > 0;
  }


  canGoPrev(): boolean {
    return true;
  }

  canGoToStep(stepTo: number): boolean {
    return this._canGoToStep(this.step, stepTo);
  }

  private _canGoToStep(stepFrom: number, stepTo: number): boolean {
    for (let i = stepFrom; i < stepTo; i++) {
      const step = this.steps[i];
      if (step && !step.isValid()) {
        return false;
      }
    }
    return true;
  }

  isFirst(step: number): boolean {
    return step === 0;
  }

  isLast(step: number): boolean {
    return step === this.stepsCount - 1;
  }
}
