import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'tvc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('tvc-property-details', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/property-details.svg'));
    iconRegistry.addSvgIcon('tvc-property-manager', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/property-manager.svg'));
    iconRegistry.addSvgIcon('tvc-occupants', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/occupants.svg'));
    iconRegistry.addSvgIcon('tvc-vehicles', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/vehicles.svg'));
    iconRegistry.addSvgIcon('tvc-pets', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/pets.svg'));
    iconRegistry.addSvgIcon('tvc-questions', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/questions.svg'));
    iconRegistry.addSvgIcon('tvc-utility-connection', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/utility-connection.svg'));
    iconRegistry.addSvgIcon('tvc-documentation', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/documentation.svg'));
    iconRegistry.addSvgIcon('tvc-inspection', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/inspection.svg'));
    iconRegistry.addSvgIcon('tvc-terms', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/terms.svg'));
    iconRegistry.addSvgIcon('tvc-database', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/database.svg'));
    iconRegistry.addSvgIcon('tvc-done', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/done.svg'));
    iconRegistry.addSvgIcon('tvc-prev', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/prev.svg'));
    iconRegistry.addSvgIcon('tvc-next', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/next.svg'));
    iconRegistry.addSvgIcon('tvc-info', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/info.svg'));
    iconRegistry.addSvgIcon('tvc-attach', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/attach.svg'));
    iconRegistry.addSvgIcon('tvc-close', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/close.svg'));
    iconRegistry.addSvgIcon('tvc-tips', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/tips.svg'));
  }
}
