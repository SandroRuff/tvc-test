import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SettingsComponent } from './settings.component';
import { ProfileComponent } from './profile/profile.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { MaterialModule } from '../material.module';
import { SettingsRoutingModule } from './settings-routing.module';

import { SettingsComponentsModule } from 'src/app/modules/settings/components/components.module';
import { SectionPropertyDetailsComponent } from './property-details/sections/section-property-details/section-property-details.component';
import { SectionPropertyManagerComponent } from './property-details/sections/section-property-manager/section-property-manager.component';
import { OccupantsComponent } from './property-details/sections/occupants/occupants.component';
import { VehiclesComponent } from './property-details/sections/vehicles/vehicles.component';
import { PetsComponent } from './property-details/sections/pets/pets.component';
import { FurterQuestionsComponent } from './property-details/sections/furter-questions/furter-questions.component';
import { UtilityConnectionComponent } from './property-details/sections/utility-connection/utility-connection.component';
import { IdentificationComponent } from './property-details/sections/identification/identification.component';
import { SettingsDirectivesModule } from './directives/directives.module';
import { PropertyInspectionComponent } from './property-details/sections/property-inspection/property-inspection.component';
import { TermsComponent } from './property-details/sections/terms/terms.component';
import { DatabaseComponent } from './property-details/sections/database/database.component';
import { SendComponent } from './property-details/sections/send/send.component';
import { WorkInProgressComponent } from 'src/app/components/work-in-progress/work-in-progress.component';

@NgModule({
  declarations: [
    SettingsComponent,
    ProfileComponent,
    PropertyDetailsComponent,
    SectionPropertyDetailsComponent,
    SectionPropertyManagerComponent,
    OccupantsComponent,
    VehiclesComponent,
    PetsComponent,
    FurterQuestionsComponent,
    UtilityConnectionComponent,
    IdentificationComponent,
    PropertyInspectionComponent,
    TermsComponent,
    DatabaseComponent,
    SendComponent,
    WorkInProgressComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
    SettingsComponentsModule,
    SettingsDirectivesModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SettingsModule { }
