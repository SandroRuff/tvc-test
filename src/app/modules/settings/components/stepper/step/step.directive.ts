import { ElementRef, Input, Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({selector: 'tvc-step'})
export class StepDirective {
  @Input() label = '';

  @Input() stepControl: FormGroup;
  @Input() stepValid = true;

  private originalStyleDisplay = null;

  constructor(private element: ElementRef) {
    this.hide();
  }

  isValid(): boolean {
    if (this.stepControl) {
      return this.stepControl.valid;
    } else {
      return this.stepValid;
    }
  }

  show(): void {
    this.element.nativeElement.style.display = this.originalStyleDisplay;
  }

  hide(): void {
    this.originalStyleDisplay = this.element.nativeElement.style.display;
    this.element.nativeElement.style.display = 'none';
  }
}
