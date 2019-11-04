import { Directive, Host, HostBinding, HostListener } from '@angular/core';
import { StepperComponent } from '../stepper.component';

@Directive({selector: '[tvcBtnPrev]'})
export class BtnPrevDirective {

  constructor(@Host() private stepper: StepperComponent) {}

  @HostBinding('disabled')
  get canGoPrev() {
    return !this.stepper.canGoPrev();
  }

  @HostListener('click')
  onBtnClick() {
    this.stepper.previous();
  }
}
