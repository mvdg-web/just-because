import { inject, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { ICONS } from './icons';

@Injectable({ providedIn: 'root' })
export class IconService {
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);

  registerAll(): void {
    for (const name of ICONS) {
      const url = this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${name}.svg`);
      this.iconRegistry.addSvgIcon(name, url);
    }
  }
}
