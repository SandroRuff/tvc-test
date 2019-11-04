import { ElementRef, Input, Directive } from '@angular/core';

@Directive({selector: 'tvc-tab'})
export class TabDirective {
  @Input() label = '';

  private originalStyleDisplay = null;

  constructor(private element: ElementRef) {
    this.hide();
  }

  show(): void {
    this.element.nativeElement.style.display = this.originalStyleDisplay;
  }

  hide(): void {
    this.originalStyleDisplay = this.element.nativeElement.style.display;
    this.element.nativeElement.style.display = 'none';
  }
}
