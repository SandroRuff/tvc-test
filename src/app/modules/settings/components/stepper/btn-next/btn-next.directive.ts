import { Directive, Host, HostBinding, HostListener } from '@angular/core';
import { StepperComponent } from '../stepper.component';

@Directive({selector: '[tvcBtnNext]'})
export class BtnNextDirective {

  constructor(@Host() private stepper: StepperComponent) {}

  @HostBinding('disabled')
  get canGoNext() {
    return !this.stepper.canGoNext();
  }

  @HostListener('click')
  onBtnClick() {
    this.stepper.next();
  }
}
