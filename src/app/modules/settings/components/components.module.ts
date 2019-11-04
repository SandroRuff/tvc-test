import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper/stepper.component';
import { StepDirective } from './stepper/step/step.directive';
import { StepSectionComponent } from './stepper/step/step-section/step-section.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { MaterialModule } from '../../material.module';
import { TabDirective } from './tab-group/tab/tab.directive';
import { BtnNextDirective } from './stepper/btn-next/btn-next.directive';
import { BtnPrevDirective } from './stepper/btn-prev/btn-prev.directive';
import { TipsComponent } from './tips/tips.component';

@NgModule({
  declarations: [
    StepperComponent,
    StepDirective,
    StepSectionComponent,
    BtnPrevDirective,
    BtnNextDirective,

    TabGroupComponent,
    TabDirective,

    TipsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    StepperComponent,
    StepDirective,
    StepSectionComponent,
    BtnPrevDirective,
    BtnNextDirective,

    TabGroupComponent,
    TabDirective,

    TipsComponent,
  ]
})
export class SettingsComponentsModule { }
